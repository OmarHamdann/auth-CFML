
component userDao  {
    
    public function searchMethod(string name) 
    { 
        qry=queryExecute("exec searchUser'#name#'");
        return qry;
        // writeDump(arguments)
        // abort;
    }

    
}