component userFactory   {

    
    remote struct function search(ARGS) returnformat="JSON"
    { 


        ARGS =  DeserializeJSON(ARGS);
   
        bean=new userBean() ;
        


	    bean.setUSERNAME(ARGS.USERNAME);

        qry=new userDao().searchMethod(bean);
        
        if(qry.recordcount){
        return {message:"success",result:qry};
        } 
        else{
        return {message:"failure"};
        } 
 
        // writeDump(arguments)
        // abort;
      
    }
    


    
}