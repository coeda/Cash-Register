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
  cashier.updateDisplay = function(n){
    //create array value
    if(operator === true){
      cashier.clearDisplay();
      operator = false;
    }
    var pushArrayValue = n;
    displayArray.push(pushArrayValue);
    cashier.showDisplay();

  };

  //clears value from display, sets display array to empty
  cashier.clearDisplay = function(){
    displayArray = [''];
    cashier.showDisplay();
  };

  //grabs balance from memory
  cashier.getBalance = function(){
    cashier.clearDisplay();
    cashier.updateDisplay(cashierBalance);
    cashier.calculator.clearMemory();
    cashier.calculator.clearTotal();
    cashier.showDisplay();
  };



return cashier;
};

var cashier = cashRegisterModule();

window.onload = function(){
  let button1 = document.getElementById('1');
    button1.addEventListener('click', function(){cashier.updateDisplay(1);});
  let button2 = document.getElementById('2');
    button2.addEventListener('click', function(){cashier.updateDisplay(2);});
  let button3 = document.getElementById('3');
    button3.addEventListener('click', function(){cashier.updateDisplay(3);});
  let button4 = document.getElementById('4');
    button4.addEventListener('click', function(){cashier.updateDisplay(4);});
  let button5 = document.getElementById('5');
    button5.addEventListener('click', function(){cashier.updateDisplay(5);});
  let button6 = document.getElementById('6');
    button6.addEventListener('click', function(){cashier.updateDisplay(6);});
  let button7 = document.getElementById('7');
    button7.addEventListener('click', function(){cashier.updateDisplay(7);});
  let button8 = document.getElementById('8');
    button8.addEventListener('click', function(){cashier.updateDisplay(8);});
  let button9 = document.getElementById('9');
    button9.addEventListener('click', function(){cashier.updateDisplay(9);});
  let button0 = document.getElementById('0');
    button0.addEventListener('click', function(){cashier.updateDisplay(0);});
  let button00 = document.getElementById('00');
    button00.addEventListener('click', function(){cashier.updateDisplay('00');});
  let buttonDivide = document.getElementById('/');
    buttonDivide.addEventListener('click', function(){cashier.calculator.divide((document.getElementById('display').value)); });
  let buttonMultiply = document.getElementById('*');
    buttonMultiply.addEventListener('click', function(){cashier.updateDisplay(cashier.calculator.multiply((document.getElementById('display').value)));});

  let buttonAdd = document.getElementById('+');
    buttonAdd.addEventListener('click', function(){cashier.calculator.add((document.getElementById('display').value));});
    buttonAdd.addEventListener('click', function(){cashier.clearDisplay();});
    buttonAdd.addEventListener('click', function(){cashier.updateDisplay(cashier.calculator.getTotal());});

  let buttonSubtract = document.getElementById('-');
    buttonSubtract.addEventListener('click', function(){cashier.calculator.subtract((document.getElementById('display').value));}, function(){cashier.updateDisplay();});

  let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', function(){cashier.clearDisplay();});
    buttonClear.addEventListener('click', function(){cashier.calculator.clearTotal();});

  let buttonGetBalance = document.getElementById('getBalance');
    buttonGetBalance.addEventListener('click', function(){cashier.getBalance();});





  };