
const box = document.querySelector('.box');
const red = document.querySelector('.red');
const handle = document.querySelector('.handle');
const game = document.querySelector('.game');



const imgs = ["red.png","blue.png","pink.png",'blue.png','orange.png'];
let imgCount =0;

const clickBox = box.addEventListener('click',()=> {
    handle.style.animation += 'hndl .5s 3 ease-out';
    
    const div = document.createElement('div');
    div.className = 'balloon';
    game.appendChild(div);
    div.classList.add('animate');
    
    const img = document.createElement('img');
    img.className = 'ballon';
    div.appendChild(img);
    img.src = imgs[imgCount];
    if(imgCount === 4){
        imgCount=0;
    }else{
        imgCount++;
    }
    
    div.addEventListener('click', () => {
            const remove = document.querySelector('.balloon');
            remove.remove();



    });
    
    
});



