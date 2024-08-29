const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', ()=> {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add('active');
    console.log(currentlySelected)
    nextBtn.disabled = false;
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', ()=> {
    galleryImgs[currentlySelected].classList.remove('active');
    console.log('pre',currentlySelected)
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
    console.log('after', currentlySelected)
    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});