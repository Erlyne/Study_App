const background = document.querySelector('background')
const close = document.querySelector('.btn1 button');

close.addEventListner('click', function () {
background.style.display = 'flex';
console.log('clicked!')
});