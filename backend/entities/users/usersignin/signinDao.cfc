
component signinDao  {
    public function insertUser(string firstName,string lastName, string password,date date, string mobile ) 
    { 
        id= floor(rand()*9999);
        qry=queryExecute("INSERT INTO Omar VALUES (#id#,'#firstName#', '#lastName#', '#password#' , '#date#')");
        qry2=queryExecute("INSERT INTO mobile_numbers VALUES (#id#, '#mobile#')");
        qry3=queryExecute("select * from omar_view where ID=#id#");
        return(qry3);
        // writeDump(arguments)
        // abort;
       

     }
    
}