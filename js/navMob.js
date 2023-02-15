const navMobClose = document.querySelector('.nav-mob__close'),
      navMob = document.querySelector('.nav-mob'),
      headerBurger = document.querySelector('.header__burger'),
      navMobItem = document.querySelectorAll('.nav-mob__item a');

function navClose(e){
    let target = e.target;
    console.log(target);
    if (target.classList.contains('nav-mob') ||
    target.classList.contains('nav-mob__close-img')){ 
        navMob.classList.remove('nav-mob__active');
    }
}

function navOpen(){
    navMob.classList.add('nav-mob__active');
}

navMobItem.forEach(elem => {
    elem.addEventListener('click', ()=> {
        navMob.classList.remove('nav-mob__active');
    });
});

navMob.addEventListener('click', navClose);
headerBurger.addEventListener('click', navOpen);
