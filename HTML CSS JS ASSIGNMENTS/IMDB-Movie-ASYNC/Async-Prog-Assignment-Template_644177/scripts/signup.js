let details
let get=JSON.parse(localStorage.getItem("main"))
if(get===null){
    details=[]
}
else{
    details=get
}
//     let main
//     let get
//     if(localStorage.getItem("main")===null)
//         {
//         localStorage.setItem("main","[]")
//         get=JSON.parse(localStorage.getItem("main"))
//         }
//         else{
//  get=JSON.parse(localStorage.getItem("main"))
//         }


document.querySelector("form").addEventListener("submit",signup)

  function signup(){
  event.preventDefault();

   let obj={ 

    MobileNo:document.getElementById("Mobile No").value,
     
     Email:document.getElementById("Email").value,
      
     password:document.getElementById("password").value
   
   }

  details.push(obj)
//   console.log(get)
//   localStorage.clear();

  localStorage.setItem("main",JSON.stringify(details))
  alert("singup successful!!")

  window.location.href="login.html"

}