document.querySelector("form").addEventListener("submit",Login)
let getdata=JSON.parse(localStorage.getItem("main"))


   function Login(){
       event.preventDefault()
       let MobileNo=document.querySelector("#MobileNo").value
       let password=document.querySelector("#password").value

       for(i=0;i<getdata.length;i++){
       //   console.log(getdata[i])
       // console.log(getdata[i].username)
           if(getdata[i].MobileNo===MobileNo && getdata[i].password===password)
           {
              
               alert("LogIn Successful!!")
            
               window.location.href="index.html"
               return
           }
          
       
       }   

       if(i==getdata.length)
       {
               alert("incorrect Details!!")
           
           }
               
      
       
   }