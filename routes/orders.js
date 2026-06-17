const express = require("express");
const router = express.Router();
const { poolPromise } = require("../db");

router.post("/", async (req, res) => {
  console.log("ORDER ROUTE NEW VERSION");
  try {
    const { buyerId, plantId, quantity, shippingAddress, paymentMethod } =
      req.body;

    const pool = await poolPromise;

    // lấy giá sản phẩm
    const plantResult = await pool.request().input("PlantID", plantId).query(`
        SELECT Price
        FROM Plants
        WHERE PlantID = @PlantID
      `);

    if (plantResult.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const price = plantResult.recordset[0].Price;
    const total = price * quantity;

    // tạo order
    console.log("NEW ORDERDETAIL CODE RUNNING");
    const orderResult = await pool
      .request()
      .input("BuyerID", buyerId)
      .input("ShippingAddress", shippingAddress)
      .input("TotalAmount", total)
      .input("PaymentMethod", paymentMethod).query(`
        INSERT INTO Orders
        (
          BuyerID,
          ShippingAddress,
          TotalAmount,
          OrderStatus,
          PaymentMethod,
          PaymentStatus,
          OrderDate
        )
        OUTPUT INSERTED.OrderID
          VALUES
(
  @BuyerID,
  @ShippingAddress,
  @TotalAmount,
  'Pending',
  @PaymentMethod,
  'Unpaid',
  GETDATE()
)
      `);

    const orderId = orderResult.recordset[0].OrderID;

    // tạo OrderDetail
    await pool
      .request()
      .input("OrderID", orderId)
      .input("PlantID", plantId)
      .input("UnitPrice", price)
      .input("Quantity", quantity).query(`
    INSERT INTO OrderDetails
    (
      OrderID,
      PlantID,
      UnitPrice,
      Quantity
    )
    VALUES
    (
      @OrderID,
      @PlantID,
      @UnitPrice,
      @Quantity
    )
  `);

    res.json({
      success: true,
      orderId,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
