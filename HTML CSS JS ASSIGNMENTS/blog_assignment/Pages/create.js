import {navbar} from '../components/navbar.js';

let navbar_div = document.getElementById("navbar_div")
navbar_div.innerHTML = navbar();

let createbtn = document.getElementById("create-blog-button");

createbtn.addEventListener("click", async function(){
    try {
        let blogdata = {
            title:document.getElementById("title").value,
            body: document.getElementById("body").value,
            author : document.getElementById("author").value, 
            // author: document.getElementById("author").value,
        };
        
        let res = await fetch(`http://localhost:3000/blogs`,{
            method:"POST",
            body: JSON.stringify(blogdata),
            headers: {
                "Content-Type":"application/json",
            },
        });
        location.href = "main.html";

    } catch (error) {
        console.log("error")
    }
})