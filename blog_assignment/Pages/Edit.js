import {navbar} from '../components/navbar.js';
import {getdata} from '../Scripts/getDataUtil.js';

let navbar_div = document.getElementById("navbar_div")
navbar_div.innerHTML = navbar() ;

let blogid = localStorage.getItem("blogid") ? JSON.parse(localStorage.getItem("blogid")) : "";

const initfunc = async (blogid) =>{
    try {
        let data = await getdata(`http://localhost:3000/blogs/${blogid}`);

        document.getElementById("title").value = data.title;
        document.getElementById("author").value = data.author;
        document.getElementById("body").value = data.body;


    } catch (error) {
        
    }
}
initfunc(blogid);

let editbtn = document.getElementById("edit-blog-button");

editbtn.addEventListener("click", async function(){
    try {
        let blogUpdatedData = {
            title:document.getElementById("title").value,
            body: document.getElementById("body").value,
            author : document.getElementById("author").value, 
            // author: document.getElementById("author").value,
        }; 

        let res = await fetch(`http://localhost:3000/blogs/${blogid}`,{
            method:"PUT",
            body: JSON.stringify(blogUpdatedData),
            headers:{
                "Content-Type" : ""
            }
        })
    } catch (error) {
        
    }
})