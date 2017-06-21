const assert = require('chai').assert;
const weekday = require('../functions.js') weekday);
const snippet = require(('../functions.js') snippet);
const numProps = require(('../functions.js') numProps);
const filterBtwn = require(('../functions.js') filterBtwn);

// weekday
function weekday(date) {
  /*  put any date and it will display the weekday */
  var weekday = new Date(2017, 5, 19).getDay();

  return isNaN(weekday) ? null : [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ][weekday];

}

alert( weekday(new Date()) );
console.assert(weekday(date));

// Get a snippet from text
function  {
  var snippet =
}
describe(function snippet(string, maxlength) {
    it('Should return I am...', function() {
      assert.equal(functions.snippet('here', 5), '...');
    });
    it('Should return I  am', function() {
      assert.equal(functions.snippet('here', 50), '...');
    });
    it('Should return ...', function() {
      assert.equal(functions.snippet('here', "six"), '...');
    });
  };
// Number of properties
describe( function numProps(obj){
    it('Should return a number when given an object', function(){
      let result = numProps({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      });
      assert.typeOf(result, 'number')
  });

    it('return 16  if given an object with 16 properties', function() {
      let result = numProps({
        name: 'Dominique',
        age: 30,
        phone: '555-555-5555'
      });
      assert.equal(result, 16)
  });

    it('return 0  if given an object with 5 properties', function() {
      let result = numProps({});
      assert.equal(result, 5);
  });
})

// Filter between //
describe( function filterBetween(array, min, max) => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    it ("filters between array and number", () => {
      expect(filterBetween(arr, 4, 5)).to.eql([4, 5, 6, 7])
    })
    it ("returns error if min or max is not a number", () => {
      expect(filterBetween('string', 2, 3)).to.equal("an array and two numbers!")
    })
    it ("Returns error if min or max is not a number", () => {
      expect(filterBetween([3, 4], 4, 'string')).to.equal("an array and two numbers!")
    })
  })
