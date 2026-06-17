-- ============================================================
-- KhuVuon2Hand Database - SQL Server
-- Second-Hand Plant Marketplace
-- Version: 1.0  |  Compatible: SQL Server 2016+
-- ============================================================

USE master;
GO

-- Drop and recreate the database
IF EXISTS (SELECT name FROM sys.databases WHERE name = N'KhuVuon2Hand')
BEGIN
    ALTER DATABASE KhuVuon2Hand SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE KhuVuon2Hand;
END
GO

CREATE DATABASE KhuVuon2Hand
    COLLATE Vietnamese_CI_AS;   -- Vietnamese character support
GO

USE KhuVuon2Hand;
GO

-- ============================================================
-- TABLE: Locations
-- Normalised Vietnamese administrative geography (3NF)
-- ============================================================
CREATE TABLE Locations (
    LocationID   INT            NOT NULL IDENTITY(1,1),
    Province     NVARCHAR(100)  NOT NULL,
    District     NVARCHAR(100)  NOT NULL,
    Ward         NVARCHAR(100)  NOT NULL,

    CONSTRAINT PK_Locations PRIMARY KEY (LocationID),
    CONSTRAINT UQ_Locations_Full UNIQUE (Province, District, Ward)
);
GO

-- ============================================================
-- TABLE: Categories
-- ============================================================
CREATE TABLE Categories (
    CategoryID   INT            NOT NULL IDENTITY(1,1),
    CategoryName NVARCHAR(100)  NOT NULL,
    Description  NVARCHAR(500)  NULL,

    CONSTRAINT PK_Categories PRIMARY KEY (CategoryID),
    CONSTRAINT UQ_Categories_Name UNIQUE (CategoryName)
);
GO

-- ============================================================
-- TABLE: Users
-- Unified table for buyers, sellers, and admins.
-- Role column drives behaviour; a user can act as both
-- buyer and seller simultaneously.
-- ============================================================
CREATE TABLE Users (
    UserID       INT            NOT NULL IDENTITY(1,1),
    Username     NVARCHAR(50)   NOT NULL,
    Email        NVARCHAR(255)  NOT NULL,
    PasswordHash NVARCHAR(255)  NOT NULL,   -- bcrypt / Argon2 hash stored here
    FullName     NVARCHAR(150)  NOT NULL,
    PhoneNumber  NVARCHAR(20)   NULL,
    Address      NVARCHAR(500)  NULL,
    Role         NVARCHAR(20)   NOT NULL CONSTRAINT DF_Users_Role DEFAULT 'User',
    IsActive     BIT            NOT NULL CONSTRAINT DF_Users_IsActive DEFAULT 1,
    CreatedAt    DATETIME2      NOT NULL CONSTRAINT DF_Users_CreatedAt DEFAULT SYSDATETIME(),
    UpdatedAt    DATETIME2      NULL,

    CONSTRAINT PK_Users PRIMARY KEY (UserID),
    CONSTRAINT UQ_Users_Username UNIQUE (Username),
    CONSTRAINT UQ_Users_Email    UNIQUE (Email),
    CONSTRAINT CK_Users_Role     CHECK (Role IN ('User', 'Admin')),
    CONSTRAINT CK_Users_Phone    CHECK (PhoneNumber IS NULL OR LEN(PhoneNumber) >= 9)
);
GO

-- ============================================================
-- TABLE: Plants
-- Core product listing entity.
-- SellerID is a self-referencing FK back to Users.
-- Status enforces the listing lifecycle.
-- ============================================================
CREATE TABLE Plants (
    PlantID      INT            NOT NULL IDENTITY(1,1),
    SellerID     INT            NOT NULL,   -- FK → Users
    CategoryID   INT            NOT NULL,   -- FK → Categories
    LocationID   INT            NOT NULL,   -- FK → Locations
    PlantName    NVARCHAR(200)  NOT NULL,
    Description  NVARCHAR(MAX)  NULL,
    Price        DECIMAL(15,2)  NOT NULL,
    Condition    NVARCHAR(30)   NOT NULL CONSTRAINT DF_Plants_Condition DEFAULT 'Good',
    Status       NVARCHAR(30)   NOT NULL CONSTRAINT DF_Plants_Status DEFAULT 'Available',
    CreatedAt    DATETIME2      NOT NULL CONSTRAINT DF_Plants_CreatedAt DEFAULT SYSDATETIME(),
    UpdatedAt    DATETIME2      NULL,

    CONSTRAINT PK_Plants         PRIMARY KEY (PlantID),
    CONSTRAINT FK_Plants_Seller  FOREIGN KEY (SellerID)   REFERENCES Users(UserID),
    CONSTRAINT FK_Plants_Cat     FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    CONSTRAINT FK_Plants_Loc     FOREIGN KEY (LocationID) REFERENCES Locations(LocationID),
    CONSTRAINT CK_Plants_Price   CHECK (Price > 0),
    CONSTRAINT CK_Plants_Cond    CHECK (Condition IN ('New', 'Like New', 'Good', 'Fair', 'Poor')),
    CONSTRAINT CK_Plants_Status  CHECK (Status IN ('Available', 'Reserved', 'Sold', 'Removed'))
);
GO

-- ============================================================
-- TABLE: PlantImages
-- Multiple images per plant listing.
-- IsPrimary flags the thumbnail (only one per plant).
-- ============================================================
CREATE TABLE PlantImages (
    ImageID      INT            NOT NULL IDENTITY(1,1),
    PlantID      INT            NOT NULL,   -- FK → Plants
    ImageURL     NVARCHAR(1000) NOT NULL,
    IsPrimary    BIT            NOT NULL CONSTRAINT DF_PlantImages_IsPrimary DEFAULT 0,
    UploadedAt   DATETIME2      NOT NULL CONSTRAINT DF_PlantImages_UploadedAt DEFAULT SYSDATETIME(),

    CONSTRAINT PK_PlantImages        PRIMARY KEY (ImageID),
    CONSTRAINT FK_PlantImages_Plant  FOREIGN KEY (PlantID) REFERENCES Plants(PlantID)
        ON DELETE CASCADE             -- images removed when plant is deleted
);
GO

-- Enforce at most one primary image per plant using a filtered unique index
CREATE UNIQUE INDEX UIX_PlantImages_OnePrimary
    ON PlantImages (PlantID)
    WHERE IsPrimary = 1;
GO

-- ============================================================
-- TABLE: Orders
-- One row per purchase transaction.
-- BuyerID references Users; shipping address is denormalised
-- intentionally — the buyer's address may change after ordering.
-- ============================================================
CREATE TABLE Orders (
    OrderID         INT            NOT NULL IDENTITY(1,1),
    BuyerID         INT            NOT NULL,   -- FK → Users
    ShippingAddress NVARCHAR(500)  NOT NULL,
    TotalAmount     DECIMAL(15,2)  NOT NULL,
    OrderStatus     NVARCHAR(30)   NOT NULL CONSTRAINT DF_Orders_Status DEFAULT 'Pending',
    PaymentMethod   NVARCHAR(50)   NOT NULL,
    PaymentStatus   NVARCHAR(30)   NOT NULL CONSTRAINT DF_Orders_PayStatus DEFAULT 'Unpaid',
    OrderDate       DATETIME2      NOT NULL CONSTRAINT DF_Orders_OrderDate DEFAULT SYSDATETIME(),
    UpdatedAt       DATETIME2      NULL,

    CONSTRAINT PK_Orders          PRIMARY KEY (OrderID),
    CONSTRAINT FK_Orders_Buyer    FOREIGN KEY (BuyerID) REFERENCES Users(UserID),
    CONSTRAINT CK_Orders_Status   CHECK (OrderStatus IN ('Pending','Confirmed','Shipped','Delivered','Cancelled')),
    CONSTRAINT CK_Orders_PayStat  CHECK (PaymentStatus IN ('Unpaid','Paid','Refunded')),
    CONSTRAINT CK_Orders_PayMeth  CHECK (PaymentMethod IN ('COD','Bank Transfer','MoMo','ZaloPay','VNPay')),
    CONSTRAINT CK_Orders_Total    CHECK (TotalAmount >= 0)
);
GO

-- ============================================================
-- TABLE: OrderDetails
-- Line items. Each row = one plant in one order.
-- UnitPrice is denormalised (snapshot at time of purchase —
-- the plant's price may change or be deleted later).
-- ============================================================
CREATE TABLE OrderDetails (
    OrderDetailID INT            NOT NULL IDENTITY(1,1),
    OrderID       INT            NOT NULL,   -- FK → Orders
    PlantID       INT            NOT NULL,   -- FK → Plants
    UnitPrice     DECIMAL(15,2)  NOT NULL,
    Quantity      INT            NOT NULL CONSTRAINT DF_OD_Qty DEFAULT 1,
    Subtotal      AS (UnitPrice * Quantity) PERSISTED,  -- computed column

    CONSTRAINT PK_OrderDetails       PRIMARY KEY (OrderDetailID),
    CONSTRAINT FK_OD_Order           FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    CONSTRAINT FK_OD_Plant           FOREIGN KEY (PlantID) REFERENCES Plants(PlantID),
    CONSTRAINT UQ_OD_OrderPlant      UNIQUE (OrderID, PlantID),   -- same plant not twice in one order
    CONSTRAINT CK_OD_UnitPrice       CHECK (UnitPrice > 0),
    CONSTRAINT CK_OD_Qty             CHECK (Quantity >= 1)
);
GO

-- ============================================================
-- TABLE: Reviews
-- Buyer reviews seller/plant after delivery.
-- ============================================================
CREATE TABLE Reviews (
    ReviewID    INT            NOT NULL IDENTITY(1,1),
    BuyerID     INT            NOT NULL,   -- FK → Users (reviewer)
    SellerID    INT            NOT NULL,   -- FK → Users (reviewed)
    PlantID     INT            NOT NULL,   -- FK → Plants
    Rating      TINYINT        NOT NULL,
    Comment     NVARCHAR(1000) NULL,
    ReviewDate  DATETIME2      NOT NULL CONSTRAINT DF_Reviews_Date DEFAULT SYSDATETIME(),

    CONSTRAINT PK_Reviews         PRIMARY KEY (ReviewID),
    CONSTRAINT FK_Reviews_Buyer   FOREIGN KEY (BuyerID)  REFERENCES Users(UserID),
    CONSTRAINT FK_Reviews_Seller  FOREIGN KEY (SellerID) REFERENCES Users(UserID),
    CONSTRAINT FK_Reviews_Plant   FOREIGN KEY (PlantID)  REFERENCES Plants(PlantID),
    CONSTRAINT UQ_Reviews_Once    UNIQUE (BuyerID, PlantID),  -- one review per buyer per plant
    CONSTRAINT CK_Reviews_Rating  CHECK (Rating BETWEEN 1 AND 5),
    CONSTRAINT CK_Reviews_NoSelf  CHECK (BuyerID <> SellerID)
);
GO

-- ============================================================
-- INDEXES (performance for common query patterns)
-- ============================================================
CREATE INDEX IX_Plants_SellerID   ON Plants(SellerID);
CREATE INDEX IX_Plants_CategoryID ON Plants(CategoryID);
CREATE INDEX IX_Plants_Status     ON Plants(Status);
CREATE INDEX IX_Plants_Price      ON Plants(Price);
CREATE INDEX IX_Orders_BuyerID    ON Orders(BuyerID);
CREATE INDEX IX_Orders_Status     ON Orders(OrderStatus);
CREATE INDEX IX_Reviews_SellerID  ON Reviews(SellerID);
GO