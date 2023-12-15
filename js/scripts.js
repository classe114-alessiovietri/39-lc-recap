const numberForm = document.getElementById('number-form');

let somma = 0;

const sumContainer = document.getElementById('sum-container');
const numberInput = document.getElementById('num');

sumContainer.innerHTML = somma;

let hoFinito = false;

numberForm.addEventListener('submit', function(pippo) {
    console.log('Avvio la sottomissione del form');

    console.log('pippo', pippo, typeof pippo);

    pippo.preventDefault();

    if (hoFinito == false) {
        const userNumber = parseInt(numberInput.value);
        console.log('L\'utente ha inserito il numero', userNumber);
    
        if (userNumber != 99) {
            numberInput.value = '';
        
            somma += userNumber;
        
            sumContainer.innerHTML = somma;
        }
        else {
            alert('Grazie, abbiamo finito');
    
            hoFinito = true;
        }
    }
});