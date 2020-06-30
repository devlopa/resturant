function tabs(){
    let tabs = document.createElement('section');
    tabs.setAttribute('id','tabs');

    let content = document.getElementById('content');
    content.appendChild(tabs);

    let tabButtons = document.createElement('div');
    tabButtons.setAttribute('class','tab-buttons');

    tabs.appendChild(tabButtons);

    let b1 = document.createElement('button');
    b1.setAttribute('type','button');
    b1.setAttribute('class','btn');
    b1.setAttribute('id','b1');
    b1.innerHTML = 'Section One';

    let b2 = document.createElement('button');
    b2.setAttribute('type','button');
    b2.setAttribute('class','btn');
    b2.innerHTML = 'Section Two';
    b2.setAttribute('id','b2');

    let b3 = document.createElement('button');
    b3.setAttribute('type','button');
    b3.setAttribute('class','btn');
    b3.setAttribute('id','b3');
    b3.innerHTML = 'Section Three';

    tabButtons.appendChild(b1);
    tabButtons.appendChild(b2);
    tabButtons.appendChild(b3);

    let sectOne = document.createElement('div');
    sectOne.setAttribute('id','sectionOne');

    let pOne = document.createElement('p');
    pOne.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, vel blanditiis? Esse ab omnis ipsum, non pariatur dicta facilis hic. Nostrum labore dolor at nobis? Rerum hic quas eaque cumque?";

    let imgOne = document.createElement('img');
    imgOne.setAttribute('src','src/home.jpg');
    imgOne.setAttribute('alt','Content-img');


    sectOne.appendChild(pOne);
    sectOne.appendChild(imgOne);

    tabs.appendChild(sectOne);

    let sectTwo = document.createElement('div');
    sectTwo.setAttribute('id','sectionTwo');

    let pTwo = document.createElement('p');
    pTwo.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, vel blanditiis? Esse ab omnis ipsum, non pariatur dicta facilis hic. Nostrum labore dolor at nobis? Rerum hic quas eaque cumque?";

    let imgTwo = document.createElement('img');
    imgTwo.setAttribute('src','src/woman.jpg');
    imgTwo.setAttribute('alt','Content-img');


    sectTwo.appendChild(pTwo);
    sectTwo.appendChild(imgTwo);

    tabs.appendChild(sectTwo);



    let sectThree = document.createElement('div');
    sectThree.setAttribute('id','sectionThree');

    let pThree = document.createElement('p');
    pThree.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, vel blanditiis? Esse ab omnis ipsum, non pariatur dicta facilis hic. Nostrum labore dolor at nobis? Rerum hic quas eaque cumque?";

    let imgThree = document.createElement('img');
    imgThree.setAttribute('src','src/breakfast.jpg');
    imgThree.setAttribute('alt','Content-img');


    sectThree.appendChild(pThree);
    sectThree.appendChild(imgThree);

    tabs.appendChild(sectThree);
}


export{tabs};