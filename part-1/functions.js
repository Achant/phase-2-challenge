const month = function (date) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  let shownMonth = date.getMonth();
  return months[shownMonth];
}

const reverseSentence = function (sentence) {
  return sentence.split(' ').reverse().join(' ');
}

const nameProps = function (object) {
  let keys = Object.keys(object);
  return keys.sort();
}


const filterBtwn = function (array, min, max) {
  let filteredArray = array.filter(function (a){
    return a >= min && a <= max;
  })
  return filteredArray;
}

module.exports = {month ,reverseSentence, nameProps, filterBtwn}
