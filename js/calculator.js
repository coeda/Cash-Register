/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

const calculator = (function(){


  var memory;
  var total;


  let calculator = {};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


   // calculator.load = function(number){
   //  var validatedNumber = validate(number);
   //   total = validatedNumber;
   //   return total;
   //   };


  /**
   * Return the value of `total`
   * @return { Number }
   */
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
    intTotal = parseInt(total);
    intNumber = parseInt(validatedNumber);
    if(isNaN(intTotal)){
      total = intNumber;
    } else {
      total = intTotal + intNumber;
      console.log(calculator.getTotal());
    }
    return calculator.getTotal();

   };


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   calculator.subtract = function(number){
    var validatedNumber = validate(number);

    total -= validatedNumber;
    return calculator.getTotal();

   };


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   calculator.multiply = function(number){
    var validatedNumber = validate(number);

    return total *= validatedNumber;

   };


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  calculator.divide = function(number){
    var validatedNumber = validate(number);

    return total /= validatedNumber;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  calculator.recallMemory = function(number){
    return memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function(){
    memory = total;
   };


  /**
   * Clear the value stored at `memory`
   */

   calculator.clearMemory = function(){
    memory = 0;
   };

   calculator.clearTotal = function(){
    total = 0;
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
