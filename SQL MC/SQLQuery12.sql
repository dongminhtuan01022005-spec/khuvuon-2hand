SELECT
    o.OrderID,
    o.OrderDate,
    u.FullName,
    p.PlantName,
    od.Quantity,
    od.UnitPrice,
    od.Subtotal,
    o.TotalAmount
FROM Orders o
JOIN Users u
    ON o.BuyerID = u.UserID
JOIN OrderDetails od
    ON o.OrderID = od.OrderID
JOIN Plants p
    ON od.PlantID = p.PlantID
ORDER BY o.OrderID DESC;