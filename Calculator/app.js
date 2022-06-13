const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay(){
     display.value = displayValue;
}

keys.addEventListener('click', function(e){
     const element = e.target;
     const value = element.value

     if(!element.matches('button')) return;

     switch(element.value) {
          case '+':
          case '-':
          case '*':
          case '/':
          case '=':
               handleOperator(value);
               break;
          case '.':     
               InputDecimal();
               break;
          case 'clear':
               clear();   
               break;
          default:
     }

     /*if(element.classList.contains('decimal')){
          //console.log('decimal',element.value);
          InputDecimal();
          updateDisplay();
          return;
     }
     
     if(element.classList.contains('operator')){
          //console.log('operator',element.value);
          handleOperator(element.value);
          updateDisplay();
          return;
     }

     if(element.classList.contains('clear')){
          //console.log('clear',element.value);
          clear();
          updateDisplay();
          return;
     }*/

     //console.log('number',element.value);

     inputNumber(element.value);
     updateDisplay();
});

function handleOperator(nextOperator) {
     const value = parseFloat(displayValue);

     if(operator &&  waitingForSecondValue){
          operator = nextOperator;
     }
     if (firstValue === null){
          firstValue = value;
     } 
     else if (operator) {
          const result = calculator(firstValue, value, operator);

          displayValue = `${parseFloat(result.toFixed(9))}`
          firstValue = result;
     } 

     waitingForSecondValue = true;
     operator = nextOperator;

     console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculator(first, second, operator) {
     if(operator === '+') {
          return first + second;
     }
     else if (operator === '-') {
          return first - second;
     }
     else if(operator === '*'){
          return first * second;
     }
     else if(operator === '/'){
          return first / second;
     }

     return second;
}

function inputNumber(num) {
     if(waitingForSecondValue) {
          displayValue = num;
          waitingForSecondValue = false;
     }
     else {
          displayValue = displayValue === '0'? num:displayValue + num;// Değerler silinmiyor ve eklenmeye devam ediyor.
     }
}

function InputDecimal() {
     if (!displayValue.includes('.')){
          displayValue += '.';
     }
}

function clear(){
     displayValue = '0';
}