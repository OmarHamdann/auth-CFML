component auth  extends="superauth" {
    
       

        remote struct function auth(string name, string password) returnformat="JSON"
		{ 
			
			qry=queryExecute("select * from Omar where FirstName='#name#' and password='#password#'");
			
			// writeDump(arguments)
			// abort;
			if(qry.recordcount){
			return {message:"success",result:qry};
		}
		else{
			return {message:"failure"};
		} 
     
}}