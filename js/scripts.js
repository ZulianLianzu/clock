
let items = document.querySelectorAll('.slider .items');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 2;//tajeta q sale 
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; 

i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
           
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 

0.6;
        }
    }
   loadShow();
next.onclick = function() {
    active = (active + 1) % items.length;
    loadShow();
}

prev.onclick = function() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}

let startX = 0;
let endX = 0;

document.querySelector('.slider').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    let difference = startX - endX;

    if (difference > 50) {  // deslizamiento hacia la derecha
        active = active + 1 < items.length ? active + 1 : 0;
    } else if (difference < -50) {  // deslizamiento hacia la izquierda
        active = active - 1 >= 0 ? active - 1 : items.length-1;
    }

    
    loadShow();
});
