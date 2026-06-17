SELECT name
FROM sys.triggers
WHERE parent_id = OBJECT_ID('OrderDetails');