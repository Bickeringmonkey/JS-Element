const myHeading = document.getElementById('myHeading');
const jsbtn = document.getElementById('js-btn');
const jsrst = document.getElementById('js-reset');
const myTextInput = document.getElementById('myTextInput');

jsbtn.addEventListener('click', () => {
myHeading.style.color = myTextInput.value;
});
jsrst.addEventListener('click', () => {
myHeading.style.color = 'black';
});