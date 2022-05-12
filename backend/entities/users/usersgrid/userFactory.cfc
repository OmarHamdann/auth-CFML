component userFactory   {

    
    remote struct function search(string name) returnformat="JSON"
    { 
        qry=new userDao().searchMethod(name);
        
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