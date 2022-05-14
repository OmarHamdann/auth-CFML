

component loginFactory  {
    remote struct function auth(string name, string password) returnformat="JSON"
    {   
        
        ARGS =  DeserializeJSON(ARGS);
        bean=new loginBean() ;
	    bean.setFIRSTNAME(ARGS.FIRSTNAME);
	    bean.setPASSWORD(ARGS.PASSWORD);


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