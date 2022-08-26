import {getdata} from '../Scripts/getDataUtil.js';
import {navbar} from '../components/navbar.js';

let tablebody = document.getElementById("table_body");

const saveToLocalstorage = (key, value)=>{
    localStorage.setItem(key, JSON.stringify(value));
}

const displaydata = (blogs, parentNode)=>{
    blogs.forEach((blog)=>{
        let tr = document.createElement("tr");

        let td1 =document.createElement("td");
        td1.textContent = blog.id;
        let td2=document.createElement("td");
        td2.textContent = blog.title;
        let td3 = document.createElement("td");
        td3.textContent = blog.author;

        let td4 = document.createElement("td");
        let viewbtn = document.createElement("button")
        viewbtn.textContent = "VIEW";
        viewbtn.onclick = function (){
            saveToLocalstorage("blogid", blog.id)
            location.href = "view.html";
            console.log("view button clicked")
        }
        td4.append(viewbtn)

        let td5 = document.createElement("td");
        let editbtn = document.createElement("button")
        editbtn.textContent = "EDIT"
        editbtn.onclick = function(){
            saveToLocalstorage("blogid", blog.id)
            location.href = "Edit.html"
            console.log("edit button clicked")
        }
        td5.append(editbtn)

        let td6 = document.createElement("td")
        let deletebtn = document.createElement("button")
        deletebtn.textContent = "DELETE"
        deletebtn.onclick = async function(){
            let res = await fetch (`http://localhost:3000/blogs/${blog.id}`,{
                method: "DELETE"
            })
            window.location.reload();
            console.log("delete button clicked")
        };
        td6.append(deletebtn);

        tr.append(td1, td2, td3, td4, td5, td6);
        parentNode.append(tr);
    });
}

const initfunc = async()=> {
    try {
        let blogdata = await getdata("http://localhost:3000/blogs")
        displaydata(blogdata, tablebody);
        console.log(blogdata)
    } catch (error) {
        console.log("error")
    }
}

initfunc();

let navbar_div = document.getElementById("navbar_div")
navbar_div.innerHTML = navbar();
