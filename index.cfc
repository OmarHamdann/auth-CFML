
<cfscript>
	
	component  
{ 
	
	   remote struct function test(string name, string password) returnformat="JSON"
		{ 
			
			qry=queryExecute("select * from employee where first_name='#name#' and password='#password#'");
			
			// writeDump(arguments)
			// abort;
			if(qry.recordcount){
			return {message:"success",result:qry};
		}
		else{
			return {message:"failure"};
		} 
}}
</cfscript>


 
