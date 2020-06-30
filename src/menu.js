
function creatMenu(){
let nav = document.createElement('nav');
nav.setAttribute('id','menu');
let h3 = document.createElement('h3');
h3.innerHTML = "HOTPICK";

nav.appendChild(h3);

let ul = document.createElement('ul');
let liOne = document.createElement('li');
let liTwo = document.createElement('li');
let liThree = document.createElement('li');
let liFour = document.createElement('li');

let l1 = document.createElement('a');
l1.setAttribute('href','#');
l1.innerHTML = "HOME";
let l2 = document.createElement('a');
l2.setAttribute('href','#');
l2.innerHTML = "ABOUT";
let l3 = document.createElement('a');
l3.setAttribute('href','#');
l3.innerHTML = "SERVICES";
let l4 = document.createElement('a');
l4.setAttribute('href','#');
l4.innerHTML = "CONTACT";


liOne.appendChild(l1);
liTwo.appendChild(l2);
liThree.appendChild(l3);
liFour.appendChild(l4);

ul.appendChild(liOne);
ul.appendChild(liTwo);
ul.appendChild(liThree);
ul.appendChild(liFour);


nav.appendChild(ul);

let content= document.getElementById('content');
content.appendChild(nav);

}

export {creatMenu}