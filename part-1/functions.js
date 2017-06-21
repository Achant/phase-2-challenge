//  weekday
function weekday(date) {

  if (date.getDay() === 1) {
    return 'Mon';
  }
  if (date.getDay() === 2) {
    return 'Tue';
  }
  if (date.getDay() === 3) {
    return 'Wed';
  }
  if (date.getDay() === 4) {
    return 'Thu';
  }
  if (date.getDay() === 5) {
    return 'Fri';
  }
  if (date.getDay() === 6) {
    return 'Sat';
  }
  if (date.getDay() === 7) {
    return 'Sun';
  }
};

// snippet from text
function snippet(string, maxlength) {
  let stringArray = string.split('');
  if (stringArray.length < maxlength) {
    return string
  }
  else for (var i = 0; i < maxlength; i++) {
    let newString = stringArray.slice(0, maxlength);
    return newString.join('') + '...'
  }
};



// Number of properties
function numProps(obj) {
  return Object.keys(obj).length;
}

// Filter between
function filterBetween (array, min, max) {
      if(Array.isArray(array) == false &&
         Array.isArray(min) != 'number' &&
         Array.isArray(max) != 'number'){
        return "an array and two numbers"
      }
      else {
        var newArray = []
        for(i=0; i<array.length; i++){
          if (array[i] >= min && array[i] <= max)
          newArray.add(array[i])
        }
        return newArray
      }
    }
module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
