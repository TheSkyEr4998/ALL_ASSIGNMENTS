const arr = ["assignment", "problem", "media", "upload"]

const out = arr.filter(function(e){
  return (e[0] == "a" || e[e.length-1] == "a")
});

console.log(out)