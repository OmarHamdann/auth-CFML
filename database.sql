
-- 1. Quey 
-- DDL : creat table, drop , alter ....etc 
-- DML : select,insert, update, delete ....etc

-- 2. database view
-- 3. database function
-- 4. database stored procedure.


-- Advanced :
-- 1. Cursor.

alter procedure sp_omar(@fname varchar(20))
As 

declare @id int =0

set @id=2

select * from omar
where id = @id


select * from omar_view
where [FirstName] = @fname

select dbo.fn_CalculateAge(getdate())


--exec sp_omar 'omar'


/****** Script for SelectTopNRows command from SSMS  ******/

/*
CREATE TABLE Omar (
    ID int ,
    FirstName varchar(50) ,
    LastName varchar(50),
    Password varchar(50)
);

*/
/*
ALTER TABLE Omar
ADD Email varchar(255);

*/

--ALTER TABLE Omar DROP COLUMN Email;
 
--INSERT INTO Omar VALUES (1,'omar', 'hamdan', '123');
--INSERT INTO Omar VALUES (2,'ram', 'ram', '123');
--INSERT INTO Omar VALUES (3,'ali', 'omar', 'ali');
--INSERT INTO Omar VALUES (4,'user', 'user', 'user');
--INSERT INTO Omar VALUES (5,'a', 'a', 'a');
--INSERT INTO Omar VALUES (6,'b', 'b', 'b');
--delete from Omar where id=5;

--UPDATE Omar SET FirstName='test',LastName='test',Password='test'  WHERE FirstName='b';

--DELETE FROM Omar WHERE id=6;


--SELECT ID, FirstName, LastName, Password FROM   Omar;

--SELECT ID, FirstName, LastName, Password FROM   Omar where id>2;

SELECT top 2 o.*,m.mobile FROM Omar o
 join [dbo].[mobile_numbers] m on o.ID=m.omar_id






alter view omar_view
As
SELECT  o.*,m.mobile,dbo.fn_CalculateAge(getdate()) as AGE FROM Omar o
 join [dbo].[mobile_numbers] m on o.ID=m.omar_id



select * from omar_view
where mobile ='077555555'

select * from [dbo].[mobile_numbers]

select Datediff(day, '01/01/1999' ,getdate())

select month( getdate())


select password, count(id) from Omar
where 
FirstName !='test1'
--and 
group by password
having count(id) > 1
order by password asc



-- =============================================
alter FUNCTION fn_CalculateAge(@DOB date)
RETURNS  int
AS
BEGIN
	
	declare @age int = 22
	-- Return the result of the function
	RETURN @age

END
GO


-- select dbo.fn_CalculateAge(getdate())


