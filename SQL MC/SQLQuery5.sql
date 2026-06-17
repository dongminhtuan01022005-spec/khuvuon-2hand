-- ============================================================
-- QUERY 1: Product catalogue with seller, category, location,
--           primary image and seller average rating
-- ============================================================
SELECT
    p.PlantID,
    p.PlantName,
    p.Price,
    p.Condition,
    p.Status,
    c.CategoryName,
    l.Province + N', ' + l.District  AS Location,
    u.FullName                        AS SellerName,
    u.PhoneNumber                     AS SellerPhone,
    img.ImageURL                      AS PrimaryImage,
    ISNULL(r.AvgRating, 0)            AS SellerAvgRating,
    r.ReviewCount
FROM Plants p
INNER JOIN Users       u   ON p.SellerID   = u.UserID
INNER JOIN Categories  c   ON p.CategoryID = c.CategoryID
INNER JOIN Locations   l   ON p.LocationID = l.LocationID
LEFT  JOIN PlantImages img ON p.PlantID    = img.PlantID AND img.IsPrimary = 1
LEFT  JOIN (
    SELECT SellerID,
           CAST(AVG(CAST(Rating AS DECIMAL(4,2))) AS DECIMAL(3,2)) AS AvgRating,
           COUNT(*) AS ReviewCount
    FROM Reviews
    GROUP BY SellerID
) r ON u.UserID = r.SellerID
WHERE p.Status = 'Available'
ORDER BY p.CreatedAt DESC;
GO

-- ============================================================
-- QUERY 2: Full order history for a buyer with line-item detail
-- ============================================================
SELECT
    o.OrderID,
    o.OrderDate,
    o.OrderStatus,
    o.PaymentMethod,
    o.PaymentStatus,
    od.PlantID,
    p.PlantName,
    s.FullName      AS SellerName,
    od.UnitPrice,
    od.Quantity,
    od.Subtotal,
    o.TotalAmount
FROM Orders o
INNER JOIN OrderDetails od ON o.OrderID   = od.OrderID
INNER JOIN Plants       p  ON od.PlantID  = p.PlantID
INNER JOIN Users        s  ON p.SellerID  = s.UserID
WHERE o.BuyerID = 2          -- parameterise in application code
ORDER BY o.OrderDate DESC, od.OrderDetailID;
GO

-- ============================================================
-- QUERY 3: Top sellers by revenue and average rating
-- ============================================================
SELECT
    u.UserID,
    u.FullName,
    u.Email,
    COUNT(DISTINCT o.OrderID)            AS TotalOrders,
    SUM(od.Subtotal)                     AS TotalRevenue,
    ISNULL(AVG(CAST(r.Rating AS DECIMAL(4,2))), 0) AS AvgRating,
    COUNT(r.ReviewID)                    AS TotalReviews
FROM Users u
INNER JOIN Plants      p  ON u.UserID   = p.SellerID
INNER JOIN OrderDetails od ON p.PlantID  = od.PlantID
INNER JOIN Orders       o  ON od.OrderID = o.OrderID
LEFT  JOIN Reviews      r  ON u.UserID   = r.SellerID
WHERE o.OrderStatus = 'Delivered'
GROUP BY u.UserID, u.FullName, u.Email
ORDER BY TotalRevenue DESC;
GO

-- ============================================================
-- QUERY 4: Search plants by keyword and category with filters
-- (simulates a marketplace browse/search page)
-- ============================================================
DECLARE @Keyword     NVARCHAR(100) = N'hoa';
DECLARE @CategoryID  INT           = NULL;    -- NULL = all categories
DECLARE @MaxPrice    DECIMAL(15,2) = 500000;
DECLARE @Province    NVARCHAR(100) = N'Hồ Chí Minh';

SELECT
    p.PlantID,
    p.PlantName,
    p.Price,
    p.Condition,
    c.CategoryName,
    l.District,
    l.Province,
    img.ImageURL AS PrimaryImage
FROM Plants p
INNER JOIN Categories  c   ON p.CategoryID = c.CategoryID
INNER JOIN Locations   l   ON p.LocationID = l.LocationID
LEFT  JOIN PlantImages img ON p.PlantID = img.PlantID AND img.IsPrimary = 1
WHERE p.Status = 'Available'
  AND p.Price <= @MaxPrice
  AND (@CategoryID IS NULL OR p.CategoryID = @CategoryID)
  AND (@Province   IS NULL OR l.Province   = @Province)
  AND (p.PlantName LIKE '%' + @Keyword + '%'
    OR p.Description LIKE '%' + @Keyword + '%')
ORDER BY p.CreatedAt DESC;
GO

-- ============================================================
-- QUERY 5: Seller dashboard — active listings with view stats
-- ============================================================
SELECT
    p.PlantID,
    p.PlantName,
    p.Price,
    p.Status,
    p.CreatedAt,
    COUNT(img.ImageID)          AS ImageCount,
    ISNULL(sold.TimesSold, 0)   AS TimesSold,
    ISNULL(rev.AvgRating, 0)    AS AvgRating
FROM Plants p
LEFT JOIN PlantImages img ON p.PlantID = img.PlantID
LEFT JOIN (
    SELECT PlantID, COUNT(*) AS TimesSold
    FROM OrderDetails
    GROUP BY PlantID
) sold ON p.PlantID = sold.PlantID
LEFT JOIN (
    SELECT PlantID, AVG(CAST(Rating AS DECIMAL(4,2))) AS AvgRating
    FROM Reviews
    GROUP BY PlantID
) rev ON p.PlantID = rev.PlantID
WHERE p.SellerID = 1    -- parameterise
GROUP BY p.PlantID, p.PlantName, p.Price, p.Status, p.CreatedAt,
         sold.TimesSold, rev.AvgRating
ORDER BY p.CreatedAt DESC;
GO

-- ============================================================
-- QUERY 6: Mark an order as Delivered and update plant status
-- (wrapped in an explicit transaction)
-- ============================================================
BEGIN TRANSACTION;
BEGIN TRY
    -- Update order status
    UPDATE Orders
    SET OrderStatus = 'Delivered',
        PaymentStatus = 'Paid',
        UpdatedAt = SYSDATETIME()
    WHERE OrderID = 1;

    -- Mark each plant in that order as Sold
    UPDATE p
    SET p.Status    = 'Sold',
        p.UpdatedAt = SYSDATETIME()
    FROM Plants p
    INNER JOIN OrderDetails od ON p.PlantID = od.PlantID
    WHERE od.OrderID = 1;

    COMMIT TRANSACTION;
    PRINT 'Order 1 delivered and plant statuses updated.';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;
GO