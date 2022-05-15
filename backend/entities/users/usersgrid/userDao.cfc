
component userDao  {
    
    public function searchMethod(bean) 
    { 
       
        qry=queryExecute("exec searchUser'#bean.getFIRSTNAME()#'");
        return qry;
        // writeDump(arguments)
        // abort;
    }

    
}