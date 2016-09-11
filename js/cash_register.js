//Keeps total balance
var myCalc = calculator();

var cashRegisterModule  = function(){


  var cashier = {};
  var cashierBalance = 0;
  var operator;
  var displayArray = [];
  cashier.equalsTo = false;
  cashier.savedOperator = '';

  cashier.operatorCount = 0;


  cashier.calculator = myCalc;
  cashier.showDisplay = function(){
    //return displayArray.join('');
    document.getElementById('display').value = displayArray.join('');
  };

  //adds value to displayArray
  cashier.grabOperator = function(o){
    //create array value
    savedOperator = o;
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

  cashier.pushBalance = function(){
    cashier.calculator.saveMemory(cashierBalance);
    cashier.calculator.pushTotal(cashierBalance);

  };

  cashier.setBalance = function(){
    cashierBalance = cashier.calculator.recallMemory();
  };

  cashier.selectedOperation = function(savedMemory){
    if(operatorCount === 0){
      switch(savedOperator){
        case '+':
          //do addition

          //performs function / adds function to stored variable
          cashier.calculator.add(savedMemory);
          operatorCount += 1;
        break;
        case '-':
          cashier.calculator.subtract(savedMemory);
          operatorCount += 1;
        break;
        case '*':
          cashier.calculator.multiply(savedMemory);
          operatorCount += 1;
        break;
        case '/':
          cashier.calculator.divide(savedMemory);
          operatorCount += 1;
        break;
        case '=':
          //Grabs number stored in memory, does last function.

        break;
      }
      if(cashier.equalsTo === true){
        operatorCount = 0;
        equalsTo = false;
      }


    }
  };



return cashier;
};

var cashier = cashRegisterModule();

window.onload = function(){
  let button_1 = document.getElementById('1');
    button_1.addEventListener('click', function(){cashier.addNumberToArray(1); operatorCount = 0;});
  let button_2 = document.getElementById('2');
    button_2.addEventListener('click', function(){cashier.addNumberToArray(2); operatorCount = 0;});
  let button_3 = document.getElementById('3');
    button_3.addEventListener('click', function(){cashier.addNumberToArray(3); operatorCount = 0;});
  let button_4 = document.getElementById('4');
    button_4.addEventListener('click', function(){cashier.addNumberToArray(4); operatorCount = 0;});
  let button_5 = document.getElementById('5');
    button_5.addEventListener('click', function(){cashier.addNumberToArray(5); operatorCount = 0;});
  let button_6 = document.getElementById('6');
    button_6.addEventListener('click', function(){cashier.addNumberToArray(6); operatorCount = 0;});
  let button_7 = document.getElementById('7');
    button_7.addEventListener('click', function(){cashier.addNumberToArray(7); operatorCount = 0;});
  let button_8 = document.getElementById('8');
    button_8.addEventListener('click', function(){cashier.addNumberToArray(8); operatorCount = 0;});
  let button_9 = document.getElementById('9');
    button_9.addEventListener('click', function(){cashier.addNumberToArray(9); operatorCount = 0;});
  let button_0 = document.getElementById('0');
    button_0.addEventListener('click', function(){cashier.addNumberToArray(0); operatorCount = 0;});
  let button_00 = document.getElementById('00');
    button_00.addEventListener('click', function(){cashier.addNumberToArray('00'); operatorCount = 0;});

  let buttonDivide = document.getElementById('/');
    //updats on first click to show updated total, says + is clicked
    buttonDivide.addEventListener('click', function(){cashier.grabOperator('/');});

    buttonDivide.addEventListener('click', function(){cashier.calculator.saveMemory((document.getElementById('display').value));});

    buttonDivide.addEventListener('click', function(){cashier.clearDisplay();});



  let buttonMultiply = document.getElementById('*');

    buttonMultiply.addEventListener('click', function(){cashier.grabOperator('*');});

    buttonMultiply.addEventListener('click', function(){cashier.calculator.saveMemory((document.getElementById('display').value));});

    buttonMultiply.addEventListener('click', function(){cashier.clearDisplay();});



  let buttonAdd = document.getElementById('+');
    buttonAdd.addEventListener('click', function(){cashier.grabOperator('+');});
    buttonAdd.addEventListener('click', function(){cashier.calculator.saveMemory((document.getElementById('display').value));});
    buttonAdd.addEventListener('click', function(){cashier.clearDisplay();});


  let buttonSubtract = document.getElementById('-');

    buttonSubtract.addEventListener('click', function(){cashier.grabOperator('-');});

    buttonSubtract.addEventListener('click', function(){cashier.calculator.saveMemory((document.getElementById('display').value));});

    buttonSubtract.addEventListener('click', function(){cashier.clearDisplay();});


  let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', savedOperator = '');
    buttonClear.addEventListener('click', operator = false);
    buttonClear.addEventListener('click', function(){cashier.clearDisplay();});
    buttonClear.addEventListener('click', function(){cashier.calculator.clearTotal();});

  let buttonGetBalance = document.getElementById('getBalance');
    buttonGetBalance.addEventListener('click', function(){cashier.getBalance();});
    buttonGetBalance.addEventListener('click', function(){cashier.calculator.clearMemory();});
    buttonGetBalance.addEventListener('click', function(){cashier.calculator.clearTotal();});
    buttonGetBalance.addEventListener('click', function(){cashier.grabOperator();});

  let buttonDeposit = document.getElementById('deposit');
    buttonDeposit.addEventListener('click', function(){cashier.pushBalance();});
    buttonDeposit.addEventListener('click', function(){cashier.grabOperator('+');});
    buttonDeposit.addEventListener('click', function(){cashier.selectedOperation(document.getElementById('display').value);});
    buttonDeposit.addEventListener('click', function(){cashier.setBalance();});
    buttonDeposit.addEventListener('click', function(){cashier.getBalance();});
    buttonDeposit.addEventListener('click', function(){cashier.grabOperator();});


  let buttonWithdraw = document.getElementById('withdraw');
    buttonWithdraw.addEventListener('click', function(){cashier.pushBalance();});
    buttonWithdraw.addEventListener('click', function(){cashier.grabOperator('-');});
    buttonWithdraw.addEventListener('click', function(){cashier.selectedOperation(document.getElementById('display').value);});
    buttonWithdraw.addEventListener('click', function(){cashier.setBalance();});
    buttonWithdraw.addEventListener('click', function(){cashier.getBalance();});
    buttonWithdraw.addEventListener('click', function(){cashier.grabOperator();});

  let buttonEquals = document.getElementById('=');

    buttonEquals.addEventListener('click', function(){cashier.selectedOperation(parseFloat(document.getElementById('display').value));});
    //clears displayArray in order to display new total.
    buttonEquals.addEventListener('click', function(){cashier.clearDisplay();});
    //writes new total to array to display
    buttonEquals.addEventListener('click', function(){cashier.addNumberToArray(cashier.calculator.getTotal());});
    //Updates display with new total after add button is clicked.
    buttonEquals.addEventListener('click', function(){cashier.grabOperator();});



  };