<html>
   <head>
     <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
     <link
       rel="stylesheet"
       href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
       integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
       crossorigin="anonymous"
     />
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   </head>
   <body>
    
         <!--- BEGIN: login --->
         <cfinclude template="./frontend/entities/users/userlogin/userlogin.html" >
         <!--- END: login--->
         
         <!--- BEGIN: search --->
         <cfinclude template="./frontend/entities/users/usersgrid/usersgrid.html" >
         <!--- END: search--->

         <!--- BEGIN: script --->
         <script src="./frontend/entities/users/usersgrid/usersgrid.js"></script>
         <script src="./frontend/entities/users/userlogin/userlogin.js"></script>
         <!--- END: script--->

   </body>
 </html>
 