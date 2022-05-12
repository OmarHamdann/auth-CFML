
component signinDao  {
    public function insertUser(bean ) 
    {
        //  writeDump(bean)
        // abort;
        id= floor(rand()*9999);
        qry=queryExecute("INSERT INTO Omar VALUES (#id#,'#bean.getfirstName()#', '#bean.getlastName()#', '#bean.getpassword()#' , '#bean.getdate()#')");
        qry2=queryExecute("INSERT INTO mobile_numbers VALUES (#id#, '#bean.getmobile()#')");
        qry3=queryExecute("select * from omar_view where ID=#id#");
        return(qry3);
        // writeDump(arguments)
        // abort;
       

     }
    
}