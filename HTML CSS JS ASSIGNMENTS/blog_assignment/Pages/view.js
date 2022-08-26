import { getdata } from "../Scripts/getDataUtil.js";
import {navbar} from '../components/navbar.js';

let blogid = localStorage.getItem("blogid")? JSON.parse(localStorage.getItem("blogid")) : "";

let root = document.getElementById("root");

console.log(blogid);

const displaydata = (blog, parentNode)=>{
    parentNode.innerHTML = ""

    let title = document.createElement("p")
    title.textContent = `Title : ${blog.title}`;

    let author = document.createElement("p");
    author.textContent = `Author : ${blog.author}`;

    let body = document.createElement("p")
    body.textContent = blog.body;

    parentNode.append(title, author, body);
};

const initfunc = async () =>{
    try {
        let blogdata = await getdata(`http://localhost:3000/blogs/${blogid}`);
        console.log("abc")
        displaydata(blogdata, root);

    } catch (error) {
        console.log("error");
    }
}

initfunc(blogid);

let navbar_div = document.getElementById("navbar_div")
navbar_div.innerHTML = navbar();