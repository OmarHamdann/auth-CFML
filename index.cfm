

<!---  <cfinvoke  method="welcome"
  
   webservice="http://localhost/test/test1/welcome.cfc?wsdl">
   <cfinvokeargument name="omar" value="123">
</cfinvoke> --->

<!---  <cfobject name="obj" component="welcome"> 


<cfoutput> 
#obj.welcome()#.


 
</cfoutput>   
--->

<cfscript> 

    qry=queryExecute("select * from employee")

    writeDump(qry)
 //  writeoutput(new index().test("aaa"));
</cfscript>



