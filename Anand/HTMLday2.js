//Normal function

 function(a,b){
    return a+b;
}
console.log(10,30);

//Function expression;

let A = function (r,h){
    return r*h;

}
console.log(A(4,3);

//Arrow function

document.getElementById()
document.querySelector

const head_1 = document.getElementById("head_1");
const para_1 = document.getElementById("par_1");
console.log(head_1);
console.log(head_1.textContent);
para_1.textContent ="changed paragraph";
console.log(para_1.textContent);
_____________________________________________________

//query selector
const head1 = document.querySelector("h1");
const head_id = document.querySelector("#head_1");
console.log(head1,head1.nodeName);
console.log(head_id,head_id.nodeName);

const head  = document.querySelector('.content');
head.innerHTML = "<h2>anand</h2>"
___________________________________________________

function changeText(){
   document.getElementById("title").innerText = "DOM CHANGED!"; 
}

function change(){
   document.getElementById("title2").innerHTML = "i Got it!"; 
}___________________________________________

function changecolor(g){
    g.style.color ="yellow";
   
}
___________________________________________________________
window.onload = function(){
    let d = document.getElementById("title2");
d.onclick = function(){
    d.style.color= "yellow";

};


};
____________________________________________________________


function change(h){
  
    h.style.color= "yellow";
    
}
function changecolor(k){
    k.style.color = "red";
   };

__________________________________________________________-

  function changeAll() {
    let elements = document.getElementsByClassName("info");
    for(let i = 0; i < elements.length; i++) {
       elements[i].style.color = "yellow";
  
    }
    console.log(elements);
};   




  
  
