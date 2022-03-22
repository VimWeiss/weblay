document.addEventListener('DOMContentLoaded', function(){

  let burgerBtn = document.getElementsByClassName('burger-menu-button')[0];
  let nav = document.getElementsByClassName('nav')[0];

  function showHideNav (nav){
    nav.classList.toggle('nav--opened');
    document.body.classList.toggle('scroll-disabled');
    document.body.classList.toggle('overlay_black');
  }

  burgerBtn.addEventListener('click', function(){
    showHideNav(nav);
    this.classList.toggle('menu--active');
  });

  window.addEventListener('load', function(){
    document.body.style.opacity = '1';
  })

});
