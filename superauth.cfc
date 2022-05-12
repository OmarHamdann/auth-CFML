<cfscript>
	
	abstract component  superAuth
{ 
	
	//    remote struct function auth(string name, string password) returnformat="JSON"
	// 	{ 
			
	// 		qry=queryExecute("select * from employee where first_name='#name#' and password='#password#'");
			
	// 		// writeDump(arguments)
	// 		// abort;
	// 		if(qry.recordcount){
	// 		return {message:"success",result:qry};
	// 	}
	// 	else{
	// 		return {message:"failure"};
	// 	} 

// }
    remote struct function auth(string name, string password) returnformat="JSON"
    { 
    return name;
    } 
}
</cfscript>