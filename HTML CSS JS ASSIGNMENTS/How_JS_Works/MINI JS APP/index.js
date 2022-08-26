//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var data;
data = [
    {
      title: "Scope",
      link: "https://www.youtube.com/embed/bD-62OMzni0",
      p1: "Scope determines the accessibility visibility of variables.",
      p2: "Variables declared inside a { } block can be accessed from outside the block",
      p3: "Variables declared within a JavaScript function, become LOCAL to the function.",
      p4: "A variable declared outside a function, becomes GLOBAL.",
      p5: "Variables declared with var, let and const are quite similar when declared inside a function.",
    },
    {
      title: "Hoisting",
      link: "https://www.youtube.com/embed/X4V59W1Y00s",
      p1: "In JavaScript, a variable can be declared after it has been used.In other words; a variable can be used before it has been declared.",
      p2: "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope.",
      p3: "If a developer doesn't understand hoisting, programs may contain bugs (errors).",
      p4: "To avoid bugs, always declare all variables at the beginning of every scope.",
      p5: "Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.",

    },
    {
      title: "Constructor Functions",
      link: "https://www.youtube.com/embed/5Jo4GxRBG8Y",
      p1: "The constructor method is a special method of a class for creating and initializing an object instance of that class.",
      p2: "A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
      p3: "If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:",
      p4: "If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:",
      p5: "However, if you provide your own constructor, and your class derives from some parent class, then you must explicitly call the parent class constructor using super.",

    },
    {
      title: "Prototype",
      link: "https://www.youtube.com/embed/kCb8HVgMzMo",
      p1: "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
      p2: "The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.",
      p3: "Every object in JavaScript has a built-in property, which is called its prototype.",
      p4: "The chain ends when we reach a prototype that has null for its own prototype.",
      p5: "There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: Object.create() and constructors.",

    }
  ]
  let property = document.querySelector(".pop");
  function show(value) {
    let h2 = document.createElement("h2");
    let frame = document.createElement("iframe");
    let ul = document.createElement("ul");
    let l1 = document.createElement("li");
    let l2 = document.createElement("li");
    let l3 = document.createElement("li");
    let l4 = document.createElement("li");
    let l5 = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "submit")
    input.setAttribute("value", "Close")
    input.setAttribute("onclick", "remove()")
    
    if (value == 0) {
      
      let temp=[];
      if(localStorage.getItem("scope")===null){
        temp.push(data[0]);
        localStorage.setItem("scope", JSON.stringify(temp));
            
      }
      else{
        temp = JSON.parse(localStorage.getItem("scope"));
      }
      console.log(temp);

      h2.innerText = temp[0].title;

      frame.src = temp[0].link;

      l1.innerText = temp[0].p1
      l2.innerText = temp[0].p2
      l3.innerText = temp[0].p3
      l4.innerText = temp[0].p4
      l5.innerText = temp[0].p5

      ul.append(l1, l2, l3, l4, l5);

      document.querySelector(".pop").append(h2, frame, ul, input);

      property.setAttribute("id", "openpop");
    }
    if (value == 1) {
      let temp=[];
      if(localStorage.getItem("hoisting")===null){
        temp.push(data[1]);
        localStorage.setItem("hoisting", JSON.stringify(temp));
            
      }
      else{
        temp = JSON.parse(localStorage.getItem("hoisting"));
      }
      console.log(temp);

      h2.innerText = temp[0].title;

      frame.src = temp[0].link;

      l1.innerText = temp[0].p1
      l2.innerText = temp[0].p2
      l3.innerText = temp[0].p3
      l4.innerText = temp[0].p4
      l5.innerText = temp[0].p5
      ul.append(l1, l2, l3, l4, l5);

      document.querySelector(".pop").append(h2, frame, ul, input);

      property.setAttribute("id", "openpop")
    }
    if (value == 2) {
      let temp=[];
      if(localStorage.getItem("constructorfxn")===null){
        temp.push(data[2]);
        localStorage.setItem("constructorfxn", JSON.stringify(temp));
            
      }
      else{
        temp = JSON.parse(localStorage.getItem("constructorfxn"));
      }
      console.log(temp);

      h2.innerText = temp[0].title;

      frame.src = temp[0].link;

      l1.innerText = temp[0].p1
      l2.innerText = temp[0].p2
      l3.innerText = temp[0].p3
      l4.innerText = temp[0].p4
      l5.innerText = temp[0].p5

      ul.append(l1, l2, l3, l4, l5);

      document.querySelector(".pop").append(h2, frame, ul, input);

      property.setAttribute("id", "openpop")
    }
    if (value == 3) {
      let temp=[];
      if(localStorage.getItem("prototype")===null){
        temp.push(data[3]);
        localStorage.setItem("prototype", JSON.stringify(temp));
            
      }
      else{
        temp = JSON.parse(localStorage.getItem("prototype"));
      }
      console.log(temp);

      h2.innerText = temp[0].title;

      frame.src = temp[0].link;

      l1.innerText = temp[0].p1
      l2.innerText = temp[0].p2
      l3.innerText = temp[0].p3
      l4.innerText = temp[0].p4
      l5.innerText = temp[0].p5

      ul.append(l1, l2, l3, l4, l5);

      document.querySelector(".pop").append(h2, frame, ul, input);

      property.setAttribute("id", "openpop")
    }
  }
  function remove() {
    property.removeAttribute("id", "openpop");
    document.querySelector(".pop").innerHTML=null
  }

