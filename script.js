function createFallingImage(imageUrl) {
    const img = document.createElement('div');
    img.classList.add('falling-image');
    img.style.backgroundImage = `url('${imageUrl}')`;
    document.body.appendChild(img);
    
    let startX = Math.random() * window.innerWidth;
    let duration = Math.random() * 4 + 2;
    
    img.style.left = `${startX}px`;
    img.style.top = `-50px`;
    img.style.animation = `fall ${duration}s linear forwards`;
    
    setTimeout(() => {
        img.remove();
    }, duration * 1000);
}

setInterval(() => {
    for (let i = 0; i < 1; i++) {
        createFallingImage('/img/sticker.png'); // Change URL to desired image
    }
}, 200);

let everestmenu = document.getElementById('everestmenu')
let everestbutton = document.getElementById('everestbutton')
let close2 = document.getElementById('close2');

everestbutton.addEventListener('click', () => {
    everestmenu.classList.remove('hidden');
})


close2.addEventListener('click', () => {
    everestmenu.classList.add('hidden');
    
})

let cat = document.getElementById('cat');
let butt = document.getElementById('butt');
let ddd = document.getElementById('ddd');
butt.addEventListener('click', () => {
    butt.classList.add('hidden');
    cat.classList.remove('hidden');
    ddd.classList.remove('py-5');
})
