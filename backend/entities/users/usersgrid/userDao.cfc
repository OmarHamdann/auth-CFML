
component userDao  {
    remote struct function auth(string name, string password) returnformat="JSON"
    { 
        qry=queryExecute("select * from Omar where FirstName='#name#' and password='#password#'");
        
        // writeDump(arguments)
        // abort;
        if(qry.recordcount)
        {
        return {message:"success",result:qry};
        }
        else
        {
        return {message:"failure"};
        } 

     }


    remote struct function search(string name) returnformat="JSON"
    { 
        
        qry=queryExecute("exec searchUser'#name#'");
        
        // writeDump(arguments)
        // abort;
        if(qry.recordcount){
        return {message:"success",result:qry};
        } 
        else{
        return {message:"failure"};
        } 
 
    }

    
}