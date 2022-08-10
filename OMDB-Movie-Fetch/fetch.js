
let url="http://www.omdbapi.com/?i=tt3896198&apikey=488d3c10&s={movie}"
let btn=document.querySelector("button")
btn.addEventListener("click",search)

function search(){

    let inpt=document.querySelector("input").value
document.querySelector("#show").innerHTML=""
    fetch(url)
.then((resolve)=>{
     return resolve.json()})
.then(resolve=>{
    // console.log(resolve)

    for(i=0;i<resolve.Search.length;i++){
    
if(resolve.Search[i].Title.includes(inpt)){
    let box=document.createElement("div")
    box.setAttribute("id","box")

    let poster=document.createElement("img")
    poster.src=resolve.Search[i].Poster
    let title=document.createElement("p")
    title.innerText="Movie Name:"+" "+resolve.Search[i].Title
    let year=document.createElement("p")
    year.innerText=resolve.Search[i].Year
    let imdb=document.createElement("p")
    imdb.innerText=resolve.Search[i].imdbID
   console.log(resolve.Search[i])
   box.append(poster,title,year,imdb)
    document.querySelector("#show").append(box)
    
    }
}

}).catch(reject=>{
    console.log("hi")
    let image=document.createElement("img")
    image.setAttribute("id","notfound")
    image.src="https://cmsapi1.novocinemas.com/images/NoImage/Movie/220x322/placeholder.jpg"
    
    let box=document.createElement("div")
    box.setAttribute("id","box2")
    box.append(image)
    document.querySelector("#show").append(box)
})
}