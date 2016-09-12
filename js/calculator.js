/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

const calculator = (function(){

  //number to operate with
  var memory = null;
  //total
  var total = null;


  let calculator = {};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


    calculator.load = function(nnumber){
     var validatedNumber = validate(number);
      memory = validatedNumber;
      };

  /**
   * Return the value of `total`
   * @return { Number }
   */

   calculator.pushTotal = function(n){
    total = n;
   };

   calculator.getTotal = function(){
    return total;

   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function(validatedNumber){
    var intTotal;
    var intNumber;
    intTotal = parseFloat(total);
    intMemory = parseFloat(memory);
    intNumber = parseFloat(validatedNumber);
    if(!isNaN(intTotal)){
      total = 0;
    }
    total = intMemory + intNumber;
    calculator.saveMemory(total);

   };


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   calculator.subtract = function(validatedNumber){
    var intTotal;
    var intNumber;
    intTotal = parseFloat(total);
    intMemory = parseFloat(memory);
    intNumber = parseFloat(validatedNumber);
    if(!isNaN(intTotal)){
      total = 0;
    }
    total = intMemory - intNumber;
    calculator.saveMemory(total);

   };


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   calculator.multiply = function(validatedNumber){
    var intTotal;
    var intNumber;
    intTotal = parseFloat(total);
    intMemory = parseFloat(memory);
    intNumber = parseFloat(validatedNumber);
    if(!isNaN(intTotal)){
      total = 0;
    }
    total = intMemory * intNumber;
    calculator.saveMemory(total);

   };


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  calculator.divide = function(validatedNumber){
    var intTotal;
    var intNumber;
    intTotal = parseFloat(total);
    intMemory = parseFloat(memory);
    intNumber = parseFloat(validatedNumber);
    if(!isNaN(intTotal)){
      total = 0;
    }
    total = intMemory / intNumber;
    calculator.saveMemory(total);

  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  calculator.recallMemory = function(){
    return memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function(number){
    memory = number;
   };


  /**
   * Clear the value stored at `memory`
   */

   calculator.clearMemory = function(){
    memory = null;
   };

   calculator.clearTotal = function(){
    total = null;
   };

  /**
   * Validation
   */

   validate = function(newNumber){
    if(typeof newNumber !== 'number'){

    }
    else{
    return parseFloat(newNumber);
    }
   };

return calculator;

});
