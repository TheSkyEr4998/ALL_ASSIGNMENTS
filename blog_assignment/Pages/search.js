import {navbar} from '../components/navbar.js';

let navbar_div = document.getElementById("navbar_div");
navbar_div.innerHTML = navbar();

let tablebody = document.getElementById("table-body")

document.getElementById("search-blog-btn").addEventListener("click", fetchupdatedresult() );
async 