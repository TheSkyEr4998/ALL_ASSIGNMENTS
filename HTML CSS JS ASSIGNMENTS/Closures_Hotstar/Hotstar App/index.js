async function getdata(){
    try {
        let search = document.getElementById("search").value;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=79b96dfcdf0842e37bcfc19d5b225cac&language=en-US&query=${search}`;
        let res = await fetch(url);
        let data = await (res).json();
        // console.log(data)

        return data.results;
    }
     catch (error) {
        console.log("Error in fetching api data")
    }
}


async function main(){
    try {
        let data = await getdata();
        display(data);
        console.log(data)
    }

     catch (error) {
        
    }
}
let time;
    function debounce(func, delay){
        if (time){
            clearTimeout(time)
        }
        time = setTimeout(function(){
            func();
        }, delay);

        // clearTimeout(time)
    }
let div = document.getElementById("images");

let container = document.getElementById("container");

function display(getdata){
    container.innerHTML = "";
    if(getdata.length ===0){
        container.style.borderStyle = "none";
        container.style.background = "transparent"
        container.innerHTML = "No Movie Found";
        console.log("ok");
    }
    else{
    container.innerHTML = "";
    getdata.forEach(function (movie){
        let div = document.createElement("div");
        
         console.log(movie.id)
        let namediv = document.createElement("div");
        let imagediv = document.createElement("div");
        let name = document.createElement("h3");
        name.textContent = movie.title;
        namediv.append(name);
        // namediv.style.border = "1px solid red"
        name.style.color = "white"

        let image = document.createElement("img");
        image.classList.add("images")
        // image.src = movie.poster_path;
        image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        image.setAttribute("alt","Cant Load");
        image.style.color = "white";
        imagediv.append(image);
        
        
        div.onclick =  function detail(){
            container.innerHTML ="";
            let main = document.getElementById("main");
            main.innerHTML =""
            
            let div = document.createElement("div");

            let namediv = document.createElement("div");
            let imagediv = document.createElement("div");
            
            namediv.append(`Movie Title : ${movie.title}`);
            name.style.color = "white"

            let image = document.createElement("img");
            image.classList.add("poster")
            image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            image.setAttribute("alt","Cant Load");
            image.style.color = "white";
            imagediv.append(image);
            let overview = document.createElement("p");
            overview.innerText = `Movie Overview : ${movie.overview}`;
            let rating = document.createElement("p");
            rating.innerText = `Rating : ${movie.vote_average}`
            main.append(imagediv, namediv, overview, rating)
           
            console.log(movie);
        }

        div.append(imagediv, namediv);
        container.append(div);
        container.style.backgroundColor = "black";
        
            container.style.border = "0.1px solid whitesmoke";
    }) 
}

}


