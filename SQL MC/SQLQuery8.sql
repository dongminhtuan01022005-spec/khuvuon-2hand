SELECT
    name,
    is_computed
FROM sys.columns
WHERE object_id = OBJECT_ID('OrderDetails');