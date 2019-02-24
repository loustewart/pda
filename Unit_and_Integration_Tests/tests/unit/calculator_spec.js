var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('adds 5 to the running total', function(){
  calculator.add(5);
  assert.equal(5, calculator.runningTotal);
  })

  it('adds 1 to 4 to get 5', function(){
  calculator.previousTotal = 4;
  calculator.add(1);
  assert.equal(5, calculator.runningTotal);
  })

  it('subtracts 4 from 7 to get 3', function(){
  calculator.previousTotal = 7;
  calculator.subtract(4);
  assert.equal(3, calculator.runningTotal);
  })

  it('multiplys 3 by 5 t get 15', function(){
  calculator.previousTotal = 3;
  calculator.multiply(5);
  assert.equal(15, calculator.runningTotal);
  })

  it('divides 21 by 7 to get 3', function(){
  calculator.previousTotal = 21;
  calculator.divide(7);
  assert.equal(3, calculator.runningTotal);
  })


});
