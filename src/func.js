function hide(){
    let sectionOne = document.getElementById('sectionOne');
    let sectionTwo = document.getElementById('sectionTwo');
    let sectionThree = document.getElementById('sectionThree');

    sectionTwo.style.display = 'none';
    sectionThree.style.display = 'none';


    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');

    b1.addEventListener('click',function(){
        sectionTwo.style.display = 'none';
        sectionThree.style.display = 'none';
        sectionOne.style.display = 'block';
    });

    b2.addEventListener('click',function(){
        sectionOne.style.display = 'none';
        sectionThree.style.display = 'none';
        sectionTwo.style.display = 'block';
    });
    
    b3.addEventListener('click',function(){
        sectionTwo.style.display = 'none';
        sectionOne.style.display = 'none';
        sectionThree.style.display = 'block';
    });
    
}

export{hide};