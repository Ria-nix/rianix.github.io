/* ---------------------------- navigation script --------------------------- */
let toggle_bar = document.querySelector('.header__toggle');
let sidebar = document.querySelector('.header__sidebar');

toggle_bar.addEventListener('click', function(){
    this.classList.toggle('active');
    sidebar.classList.toggle('visible');
    document.body.classList.toggle('none_scroll');
})

/* ------------------------------ slider script ----------------------------- */
const container = document.querySelectorAll('.slider__container');
const nxtBtn = document.querySelector('.slider__arrow_type_next');
const preBtn = document.querySelector('.slider__arrow_type_prev');

let position = 0;
const slideToShow = 4;
const slideToScroll = 1;

container.forEach((item, i) => {
    let containerDim = item.getBoundingClientRect();
    let containerWidth = containerDim.width;
    const itemWidth = (containerWidth / slideToShow) ; // width of each element
    const moveTransition = slideToScroll * itemWidth;

    nxtBtn.addEventListener('click', () => {
        item.scrollLeft += itemWidth;
    })
    
    preBtn.addEventListener('click', () => {
        item.scrollLeft -= itemWidth;
    })
})