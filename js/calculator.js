/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

const calculator = (function(){


  var memory = 0;
  var total = 0;

  let calculator = {};

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


   calculator.load = function(number){
    var validatedNumber = validate(number);
     total = validatedNumber;
     return total;
     };

  /**
   * Return the value of `total`
   * @return { Number }
   */
   calculator.getTotal = function(number){
    return total;

   };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function(number){
    var validatedNumber = validate(number);
    return total += validatedNumber;

   };


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   calculator.subtract = function(number){
    var validatedNumber = validate(number);
    return total -= validatedNumber;

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

  /**
   * Validation
   */

   validate = function(newNumber){
    if(typeof newNumber !== 'number'){

    }
    else{
    return newNumber;
    }
   };

return calculator;

});
