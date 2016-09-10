//Keeps total balance
var myCalc = calculator();

var cashRegisterModule  = function(){


  var cashier = {};
  var cashierBalance = 0;
  var operator = false;
  var displayArray = [];


  cashier.calculator = myCalc;
  cashier.showDisplay = function(){
    //return displayArray.join('');
    document.getElementById('display').value = displayArray.join('');
  };

  //adds value to displayArray
  cashier.updateDisplay = function(){
    //create array value
    operator = true;
  };

  //clears value from display, sets display array to empty
  cashier.clearDisplay = function(){
    displayArray = [''];
    cashier.showDisplay();
  };

  //grabs balance from memory
  cashier.getBalance = function(){
    cashier.clearDisplay();
    cashier.calculator.clearMemory();
    cashier.calculator.clearTotal();
    cashier.addNumberToArray(cashierBalance);

  };

  cashier.addNumberToArray = function(n){
    var pushArrayValue = n;
    if(operator === true){
      cashier.clearDisplay();
    }
    if(n >= 0 || n === '00'){
      operator = false;
    }
    displayArray.push(pushArrayValue);
    cashier.showDisplay();

  };

return cashier;
};

var cashier = cashRegisterModule();

window.onload = function(){
  let button_1 = document.getElementById('1');
    button_1.addEventListener('click', function(){cashier.addNumberToArray(1);});
  let button_2 = document.getElementById('2');
    button_2.addEventListener('click', function(){cashier.addNumberToArray(2);});
  let button_3 = document.getElementById('3');
    button_3.addEventListener('click', function(){cashier.addNumberToArray(3);});
  let button_4 = document.getElementById('4');
    button_4.addEventListener('click', function(){cashier.addNumberToArray(4);});
  let button_5 = document.getElementById('5');
    button_5.addEventListener('click', function(){cashier.addNumberToArray(5);});
  let button_6 = document.getElementById('6');
    button_6.addEventListener('click', function(){cashier.addNumberToArray(6);});
  let button_7 = document.getElementById('7');
    button_7.addEventListener('click', function(){cashier.addNumberToArray(7);});
  let button_8 = document.getElementById('8');
    button_8.addEventListener('click', function(){cashier.addNumberToArray(8);});
  let button_9 = document.getElementById('9');
    button_9.addEventListener('click', function(){cashier.addNumberToArray(9);});
  let button_0 = document.getElementById('0');
    button_0.addEventListener('click', function(){cashier.addNumberToArray(0);});
  let button_00 = document.getElementById('00');
    button_00.addEventListener('click', function(){cashier.addNumberToArray('00');});

  let buttonDivide = document.getElementById('/');
    buttonDivide.addEventListener('click', function(){cashier.calculator.divide((document.getElementById('display').value));});
    buttonDivide.addEventListener('click', function(){cashier.clearDisplay();});
    buttonDivide.addEventListener('click', function(){cashier.addNumberToArray(cashier.calculator.getTotal());});
    buttonDivide.addEventListener('click', function(){cashier.updateDisplay();});

  let buttonMultiply = document.getElementById('*');
    buttonMultiply.addEventListener('click', function(){cashier.calculator.multiply((document.getElementById('display').value));});
    buttonMultiply.addEventListener('click', function(){cashier.clearDisplay();});
    buttonMultiply.addEventListener('click', function(){cashier.addNumberToArray(cashier.calculator.getTotal());});
    buttonMultiply.addEventListener('click', function(){cashier.updateDisplay();});

  let buttonAdd = document.getElementById('+');
    buttonAdd.addEventListener('click', function(){cashier.calculator.add((document.getElementById('display').value));});
    buttonAdd.addEventListener('click', function(){cashier.clearDisplay();});
    buttonAdd.addEventListener('click', function(){cashier.addNumberToArray(cashier.calculator.getTotal());});
    buttonAdd.addEventListener('click', function(){cashier.updateDisplay();});

  let buttonSubtract = document.getElementById('-');
    buttonSubtract.addEventListener('click', function(){cashier.calculator.subtract((document.getElementById('display').value));});
    buttonSubtract.addEventListener('click', function(){cashier.clearDisplay();});
    buttonSubtract.addEventListener('click', function(){cashier.addNumberToArray(cashier.calculator.getTotal());});
    buttonSubtract.addEventListener('click', function(){cashier.updateDisplay();});

  let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', function(){cashier.clearDisplay();});
    buttonClear.addEventListener('click', function(){cashier.calculator.clearTotal();});

  let buttonGetBalance = document.getElementById('getBalance');
    buttonGetBalance.addEventListener('click', function(){cashier.getBalance();});

  let buttonEquals = document.getElementById('=');
    buttonGetBalance.addEventListener('click', function(){cashier.getBalance();});




  };