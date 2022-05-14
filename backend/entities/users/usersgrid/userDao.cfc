
component userDao  {
    
    public function searchMethod(bean) 
    { 
        qry=queryExecute("exec searchUser'#bean.name#'");
        return qry;
        // writeDump(arguments)
        // abort;
    }

    
}