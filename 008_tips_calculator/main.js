let tipValue = 0;

const billInput = document.querySelector('.input-section__bill-input');
let billValue = parseInt(billInput.value);

const peopleInput =  document.querySelector('.input-section__people-input')
let peopleValue = parseInt(peopleInput.value)

const tipResultValue = document.querySelector('.results__tip-value');
const totalResultValue = document.querySelector('.results__total-value');

const customInput = document.querySelector('.btns__custom');

const alert = document.querySelector('#alert');
const resetBtn = document.querySelector('.result-section__reset');

const buttons = document.querySelectorAll('.btns__button');

buttons.forEach((button) => {
    button.addEventListener('click', e => {

        button.classList.add('btns__button--selected');
        buttons.forEach(item => {
            item.classList.remove('btns__button--selected');
        });

        // Get % value
        tipValue = e.target.innerHTML.slice(0,-1);
        calcTip();
    });
});

// Bill's update
const calcTip = () => {
    // Tip Amount
    tipResultValue.innerHTML =  (((tipValue/100) * billValue) / peopleValue).toFixed(2);
    // Total
    totalResultValue.innerHTML = (((billValue * tipValue / 100) + billValue) / peopleValue).toFixed(2);
};

billInput.addEventListener('input', () => {
    billValue = parseFloat(billInput.value);
    calcTip();
});

// Custom Input Calc
customInput.addEventListener('input', () => {
    tipValue = parseInt(customInput.value);

    if(!isNaN(tipValue)) {
        buttons.forEach(item => {
            item.classList.remove('btns__button--selected');
        });
        calcTip();
    }

});

// People's update
peopleInput.addEventListener('input', ()=> {
    peopleValue = parseFloat(peopleInput.value);

    console.log(peopleValue);

    if(peopleValue <= 0 || isNaN(peopleValue)) {
        peopleInput.style.borderColor = 'rgb(164,68,68)';
        alert.classList.add('error');
        // Tip Amount
        tipValue = 0;
        tipResultValue.innerHTML =  tipValue.toFixed(2);
        // Total
        totalResultValue.innerHTML = tipValue.toFixed(2);
    }else{
        peopleInput.style.borderColor = 'hsl(189,41%,97%)';
        alert.classList.remove('error');
        calcTip();
    }

});

// Reset
resetBtn.addEventListener('click', () => {
    billInput.value = 0;
    billValue = 0;
    peopleInput.value = 5;
    peopleValue = 5;
    customInput.value = 'Custom';
    calcTip();
});

