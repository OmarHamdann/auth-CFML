
component loginDao  {
    public function auth(bean) 
    { 
        qry=queryExecute("select * from Omar where FirstName='#bean.name#' and password='#bean.password#'");
        return(qry);
        // writeDump(arguments)
        // abort;
       

     }
    
}