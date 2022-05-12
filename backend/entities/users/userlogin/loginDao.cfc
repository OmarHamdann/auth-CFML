
component loginDao  {
    public function auth(string name, string password) 
    { 
        qry=queryExecute("select * from Omar where FirstName='#name#' and password='#password#'");
        return(qry);
        // writeDump(arguments)
        // abort;
       

     }
    
}