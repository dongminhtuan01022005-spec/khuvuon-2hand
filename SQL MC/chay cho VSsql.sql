EXEC sys.sp_configure N'show advanced options', N'1';
RECONFIGURE;
EXEC sys.sp_configure N'remote admin connections', N'1';
RECONFIGURE;