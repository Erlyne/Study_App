const $bg = document.querySelector('.popup_screen_bg');
const $login = document.querySelector('.login_window');
const $signup = document.querySelector('.signup_window');
$('.btn1').click(function () {
  $bg.style.display = 'flex';
  
//<<<<<<< HEAD
});
//=======
//})
//>>>>>>> 254058d87e36d7efb079737091bdc13f573ceaa8




$('.close button').click(function() {
  $bg.style.display ='none';
});

$('.btn2').click(function () {
  $bg.style.display = 'flex';
  $login.style.display = 'flex';
  $signup.style.display = 'none';
});

