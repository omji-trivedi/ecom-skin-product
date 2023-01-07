// Product page product slide starts here 

const productPlusPg = document.querySelector('#product-plus-pg');
const productMinusPg = document.querySelector('#product-minus-pg');
const productSliderPg = document.querySelector('#product-slider-pg');

productPlusPg.addEventListener('click', () => {
    productSliderPg.scrollLeft += 300;
})
productMinusPg.addEventListener('click', () => {
    productSliderPg.scrollLeft -= 300;
})