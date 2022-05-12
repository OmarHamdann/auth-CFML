

component loginFactory  {
    remote struct function auth(string name, string password) returnformat="JSON"
    { 
        qry=new loginDao().auth(name,password);
        
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
    
}