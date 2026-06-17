SELECT OBJECT_NAME(object_id) AS ObjectName
FROM sys.sql_modules
WHERE definition LIKE '%Subtotal%';