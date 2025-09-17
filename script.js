let h1= document.querySelector("h1")
h1.innerText =" Mai hoon TheOGReturns : ";

// let h2 = document.createElement("h2");
// h2.textContent="Hello Hero Plays";

// document.body.append(h2);


// h2.style.color = "red";

let b1= document.createElement("button");
b1.textContent = " Buy Now: ";
b1.style.borderRadius = "20px";
b1.addEventListener("mouseenter", () => {
  b1.style.background = "red";
});
b1.addEventListener("mouseleave", () => {
  b1.style.background = "white";
  b1.style.color ="black"
});
b1.addEventListener("click", () =>{
    b1.style.transform = "scale(2.5)";
});
document.body.append(b1);

console.dir("Hello world");


// Page par koi bhi click karenge to events raise ho jaati hai . -->


// Event Listener ka role hota hai kisi event ke reaction ke appropiate particular reaction dena..

/*

Sabse pahle tag select karte hai 
let h1 = document.querySelector("Tag Name");

2nd step -->

addEventListener
h1.add EventListener ("Event", function(){
css, js .. etc
})
 */

let h2 = document.querySelector("h2");
h2.addEventListener("click",function(){
  h2.style.color ="red";
})

let inpt = document.querySelector("input")
inpt.addEventListener("input", function(data){
  if(data!== null){
  console.log(data);
  }
})

//Investigating call bind 

const user = {
  name : `asha`,
  greet (){
    console.log(this.name);
    
  }
}
user.greet();
const f = user.greet;
f.call(user);
const bound = f.bind(user);
 bound();


 
