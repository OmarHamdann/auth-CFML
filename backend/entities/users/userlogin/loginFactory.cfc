

component loginFactory  {
    remote struct function auth(ARGS) returnformat="JSON"
    {   
        
        ARGS =  DeserializeJSON(ARGS);
        bean=new loginBean() ;
       
	    bean.setUSERNAME(ARGS.NAMEUSER);
	    bean.setPASSWORD(ARGS.PASSWORD);
        
     



        qry=new loginDao().auth(bean);
        
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