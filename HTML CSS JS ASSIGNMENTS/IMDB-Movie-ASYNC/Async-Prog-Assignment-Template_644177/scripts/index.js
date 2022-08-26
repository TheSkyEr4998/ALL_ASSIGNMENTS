


let movielist=[{image:"https://www.uniquenewsonline.com/wp-content/uploads/2022/04/KGF-Chapter-2.jpg",name:"KGF-Chapter 2",releaseDate:"14-Apr-2022",imdb:10},
{image:"https://movizweb.com/wp-content/uploads/2021/05/RRR-800x450.jpg",name:"RRR",releaseDate:"14-Apr-2022",imdb:9},
{image:"https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/08/1565762650_kashmirvivekagnihotri.jpg",name:"The Kashmir files",releaseDate:"14-Apr-2022",imdb:9.5},
{image:"https://www.dailypioneer.com/uploads/2020/story/images/big/prabhas---radhe-shyam--poster-goes-viral-within-24-hours-2020-07-11.jpg",name:"Radhe Shyaam",releaseDate:"20-feb-2022",imdb:7},
{image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/04/18/1506693-beast.jpg",name:"Beast",releaseDate:"13-Apr-2022",imdb:8.2},
{image:"https://content.tupaki.com/twdata/2020/0920/news/Bunny-And-Team-To-Resume-Shoot-Very-Soon-1600344921-1279.jpg",name:"Pushpa",releaseDate:"11-Jan-2022",imdb:8.5},
{image:"https://i.ytimg.com/vi/_ZBu9tuO6uY/maxresdefault.jpg",name:"Attack",releaseDate:"01-Apr-2022",imdb:8.2},
{image:"https://www.uniquenewsonline.com/wp-content/uploads/2022/04/KGF-Chapter-2.jpg",name:"KGF-Chapter 1",releaseDate:"14-Apr-2018",imdb:9},
{image:"https://www.thenewsfetcher.com/wp-content/uploads/2021/02/Spider-Man-No-Way-Home.png",name:"Spiderman-NoWay Home",releaseDate:"14-Apr-2022",imdb:8.7}]


let imagelist=["https://www.uniquenewsonline.com/wp-content/uploads/2022/04/KGF-Chapter-2.jpg",
"https://movizweb.com/wp-content/uploads/2021/05/RRR-800x450.jpg","https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/08/1565762650_kashmirvivekagnihotri.jpg",
"https://www.dailypioneer.com/uploads/2020/story/images/big/prabhas---radhe-shyam--poster-goes-viral-within-24-hours-2020-07-11.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/04/18/1506693-beast.jpg",
"https://content.tupaki.com/twdata/2020/0920/news/Bunny-And-Team-To-Resume-Shoot-Very-Soon-1600344921-1279.jpg",
"https://i.ytimg.com/vi/_ZBu9tuO6uY/maxresdefault.jpg",
"https://www.uniquenewsonline.com/wp-content/uploads/2022/04/KGF-Chapter-2.jpg",
"https://www.thenewsfetcher.com/wp-content/uploads/2021/02/Spider-Man-No-Way-Home.png"
]
let get=document.getElementById("slideshow")

let i=0

function example(){
  get.innerText=""
    let imgbox=document.createElement("div")
    imgbox.setAttribute("id",'imagebox')
 let img=document.createElement("img")
 img.setAttribute("class","images")
 img.src=imagelist[i]
 imgbox.append(img)
 get.append(imgbox)
 if(i<imagelist.length-1){
     i++
 }
 else{
     i=0
 }
//  clearInterval(intervalid)
}

let intervalid=setInterval(example,5000)

document.getElementById("select").addEventListener("change",function(){

    let select=document.getElementById("select").value
    console.log(select)
    movielist.sort(function(a,b){
        if(select==="sort-lh"){
            return a.imdb-b.imdb}
        else{
            return b.imdb-a.imdb
        }
    })
    display(movielist)
})

let main=document.getElementById("movies")

function display(movies){
document.getElementById("movies").innerHTML="";
movielist.forEach(ele=>{
    let div=document.createElement("div")
    div.setAttribute("id","box")
    let image=document.createElement("img")
    image.setAttribute("id","image")
    image.src=ele.image
    let name=document.createElement("p")
    name.innerText="Movie Name:"+" "+ele.name
    let releaseDate=document.createElement("p")
    releaseDate.innerText="Release Date:"+" "+ele.releaseDate
    let imdb=document.createElement("p")
    imdb.innerText="IMDB:"+" "+ele.imdb

    div.append(image,name,releaseDate,imdb)
    main.append(div)
})
}

display()



// function change(){

//     console.log(selectedValue)
// if(selectedValue==="sort-lh"){
//     movielist.sort(function(a,b){
//         if(a.imdb>b.imdb){
//             return 1;
//         }
//         else if(a.imdb<b.imdb){
//             return -1;
//         }
//         return 0;
//     })
//     // display()
// }

// if(selectedValue=="sort-hl")
// {
//     movielist.sort(function(a,b)
//     {
//         if(a.imdb>b.imdb){
//             return -1;
//         }
//         else if(a.imdb<b.imdb){
//             return 1;
//         }
//         return 0;
//     })
//     // display()
// }
// window.location.reload()



