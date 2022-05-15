
component loginDao  {
    public function auth(bean) 
    { 
        qry=queryExecute("select * from Omar where FirstName='#bean.getUSERNAME()#' and password='#bean.getPASSWORD()#'");
        return(qry);
        // writeDump(arguments)
        // abort;
       

     }
    
}