let tata = {
    Brand: "TATA",
    Owner : "Ratan Tata",
    Type: "Automobiles"
}

let xuv500 = Object.create(tata);
    xuv500.model = "SUV";
    xuv500.color = "white"
console.log(xuv500);


tata = function(){
    this.Brand= "TATA";
    this.owner = "Ratan Tata";
    this.type = "Automobiles";
}

xuv500 = new tata()
xuv500.model = "SUV"
console.log(xuv500)