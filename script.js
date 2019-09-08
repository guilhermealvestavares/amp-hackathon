const form = document.querySelector('#form');
const btnSoma = document.querySelector('#btnSoma');
const fator1 = document.querySelector('#fator1');
const fator2 = document.querySelector('#fator2');
const sumResult = document.querySelector('#sumResult');

const getFatorValue = element => parseFloat(element.value);

btnSoma.addEventListener('click', () => {
    console.log(
        form
    );
    sumResult.innerHTML = getFatorValue(fator1) + getFatorValue(fator2);
});