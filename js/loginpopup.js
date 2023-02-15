function loginPoPup(){
    const btnPopUp = document.querySelector('.login-pop-up__btn'),
          btnPopUpSignUp = document.querySelector('.login-pop-up__btn-sign-up'),
          loginPopUpSingSocial = document.querySelector('.login-pop-up__sing-social'),
          loginPopUpOr = document.querySelector('.login-pop-up__or'),
          loginPopUpTitle = document.querySelector('.login-pop-up__title'),
          forget = document.querySelector('.forget'),
          loginPopUpRegister = document.querySelector('.login-pop-up__register'),
          loginPopUpDontHaveText = document.querySelector('.login-pop-up__dont-have-text'),
          loginPopUpDontAlreadyText = document.querySelector('.login-pop-up__already-have-text'),
          loginPopUpLogIn = document.querySelector('.login-pop-up__log-in'),
          loginPopUpSingUp = document.querySelector('.login-pop-up-sing-up'),
          account = document.querySelector('#account'),
          loginPopUp = document.querySelector('.login-pop-up'),
          buttonBtnPopUp = document.querySelector('.button__btn-pop-up');
   
/// вывод алерта start

function dataAlert(e){
 document.querySelectorAll('#login-in').forEach(item => {
    alert(item.value);
    item.value = '';
 });

}
btnPopUp.addEventListener('click', dataAlert);

/// вывод алерта end

// popUp Open-close start

function popUpOpen(){
  loginPopUp.classList.add('login-pop-up-activ');
}

function popUpClose(e){
    if(e.target.classList.contains('login-pop-up')){
        loginPopUp.classList.remove('login-pop-up-activ');
    }
    
}

buttonBtnPopUp.addEventListener('click', popUpOpen);
account.addEventListener('click', popUpOpen);
loginPopUp.addEventListener('click', popUpClose);


// popUp Open-close end

// Register start
function createAccountOpen(){
    loginPopUpDontHaveText.style.display = 'none';
    loginPopUpDontAlreadyText.style.display = 'block';
    loginPopUpSingSocial.style.display = 'none';
    loginPopUpOr.style.display = 'none';
    loginPopUpTitle.innerHTML = 'Create account';
    forget.style.display = 'none';
    btnPopUp.innerHTML = 'Sign Up';
}

function createAccountClose(){
    loginPopUpDontHaveText.style.display = 'block';
    loginPopUpDontAlreadyText.style.display = 'none';
    loginPopUpSingSocial.style.display = 'block';
    loginPopUpOr.style.display = 'flex';
    loginPopUpTitle.innerHTML = 'Log in to your account';
    forget.style.display = 'block';
    btnPopUp.innerHTML = 'Sign In';
}

loginPopUpRegister.addEventListener('click', createAccountOpen);

loginPopUpLogIn.addEventListener('click', createAccountClose);
// Register end

}
loginPoPup();
