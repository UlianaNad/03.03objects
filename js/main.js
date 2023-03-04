const nameInput = document.querySelector('.name');
const surnameInput = document.querySelector('.surname');
const bdayInput = document.querySelector('.date');
const submitButton = document.querySelector('.submit');

let people = [];

submitButton.addEventListener('click', () => {
    //console.log(nameInput.value, surnameInput.value, bdayInput.value);
    if(nameInput.value){

        people.push(
            {
                name:nameInput.value,
                surname:surnameInput.value,
                birthday:bdayInput.value
            }
        )

        console.log(people)
       
            
        const List = people.map((person) => {
            let html = `<p>${person.name} ${person.surname} ${person.birthday}</p>`;
            return html;
        })

        const newList = List.join('');
        document.querySelector('.list').innerHTML = newList; 
    } else {
        let html = `<div class='warn'>Fill the fields!</div>`;
        document.querySelector('.warning').innerHTML = html;

        setTimeout(() =>{
            let html = ``;
            document.querySelector('.warning').innerHTML = html;
        },3000)
        return;
        
    }
})