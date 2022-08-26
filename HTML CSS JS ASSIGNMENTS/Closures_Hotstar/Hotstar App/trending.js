let main = document.getElementById("main");

async function getdata(){
        try {
            let res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=79b96dfcdf0842e37bcfc19d5b225cac`)

            let data =await res.json();
            display(data.results)
            console.log(data.results)
           
        } catch (error) {
            console.log("error")
        }
}

getdata();

let container = document.getElementById("box");
function display(data){
    let database = data;
    database.forEach(function(elem){
        let div = document.createElement("div");
        div.classList.add("card")

        let name = document.createElement("p");
        name.innerText = "Title :" + " " +elem.title;

        let image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${elem.poster_path}`
        image.classList.add("image")

        let category = document.createElement("p");
        category.innerText = `Release : ${elem.release_date}`;

        let price = document.createElement("p");
        price.innerText =`Rating : ${elem.vote_average}`;
        div.append( image,name, category, price);
        
        container.append(div);

    })


}