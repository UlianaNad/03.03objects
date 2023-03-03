const nameInput = document.querySelector('.name');
const surnameInput = document.querySelector('.surname');
const bdayInput = document.querySelector('.date');
const submitButton = document.querySelector('.submit');


submitButton.addEventListener('click', () => {
    console.log(nameInput.value, surnameInput.value, bdayInput.value);
})