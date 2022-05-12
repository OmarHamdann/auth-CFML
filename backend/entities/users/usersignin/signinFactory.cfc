

component signinFactory output="false" returnformat="JSON"  returnType="any" securejson="false"  {
    remote struct function createUser (ARGS) returnformat="JSON" verifyclient="false" securejson="false"
    { 

        ARGS =  DeserializeJSON(ARGS);
   
        bean=new signinBean() ;
        


	    bean.setFIRSTNAME(ARGS.FIRSTNAME);
	    bean.setLASTNAME(ARGS.LASTNAME);
	    bean.setPASSWORD(ARGS.PASSWORD);
	    bean.setMOBILE(ARGS.MOBILE);
	    bean.setDATE(ARGS.DATE);
        

        // writeDump(bean)
        // abort;
        qry=new signinDao().insertUser(bean ) ;
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