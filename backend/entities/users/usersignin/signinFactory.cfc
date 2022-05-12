

component signinFactory  {
    remote struct function createUser (string firstName,string lastName, string password,date date, string mobile) returnformat="JSON"
    { 
        qry=new signinDao().insertUser(firstName,lastName,  password,date,  mobile ) ;
        
        
        if(qry.recordcount)
        {
        return {message:"success",result:qry};
        }
        else
        {
        return {message:"failure"};
        } 

     }
    
}