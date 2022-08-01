let toggle_bar = document.querySelector('.header__toggle');
let sidebar = document.querySelector('.header__sidebar');

toggle_bar.addEventListener('click', function(){
    this.classList.toggle('active');
    sidebar.classList.toggle('visible');
    document.body.classList.toggle('none_scroll');
})