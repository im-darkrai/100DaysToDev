let h1= document.querySelector("h1")
h1.innerText =" Mai hoon TheOGReturns : ";

let h2 = document.createElement("h2");
h2.textContent="Hello Hero Plays";

document.body.append(h2);


h2.style.color = "red";

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
document.body.append(b1);
