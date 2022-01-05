const background = document.querySelector('.background')
const close = document.querySelector('.btn1');

close.addEventListner('click', function () {
background.style.display = 'flex';
});