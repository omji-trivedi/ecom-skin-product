// header's javascript starts here 

const bar = document.getElementById('bar');
const cross = document.getElementById('cross');
const navbar = document.querySelector(".nav-bar");
const header = document.querySelector('header');

bar.addEventListener("click", () => {
    navbar.style.transform = "translateY(0)";
    header.style.height = '440px';
    bar.style.display = "none";
    cross.style.display = 'block';
})

cross.addEventListener('click', () => {
    header.style.height = '80px';
    navbar.style.transform = 'translateY(-450px)';
    bar.style.display = 'block';
    cross.style.display = 'none';
})



// banner starts here 
// jquery starts here 

var i = 0;

$('#plus').click(function() {

    $('.banner').css('animation', 'none');

    i++;

    if (i <= ($('.banner').length - 1)) {
        $('.banner').css('transform', `translateX(-${i}00vw)`);
    } else {
        i = $('.banner').length - 1;
    }
});

$('#minus').click(function() {

    $('.banner').css('animation', 'none');

    i--;

    if (i >= 0) {
        $('.banner').css('transform', `translateX(-${i}00vw)`);
    } else {
        i = 0;
    }
});


// Product slides starts here

const productPlus = document.querySelector('#product-plus');
const productMinus = document.querySelector('#product-minus');
const productSlider = document.querySelector('#product-slider');

productPlus.addEventListener('click', () => {
    productSlider.scrollLeft += 300;
})
productMinus.addEventListener('click', () => {
    productSlider.scrollLeft -= 300;
})