function header(){
    let header = document.createElement('header');
    header.setAttribute('id','header');

    let img = document.createElement('img');
    img.setAttribute('src','src/home.jpg');

    let content = document.getElementById('content');
    header.appendChild(img);

    content.appendChild(header);
}

export{header}