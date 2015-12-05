// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {

// Input null
  if (input === null) {
    return 'null';
  }

// Input undefined
  if (input === undefined) {
    return '';
  }

// Input type is a String
  if (typeof input === 'string') {
    return '"' + input + '"';
  }

// Input is an Array
  if (Array.isArray(input)) {
    if (input.length > 0) {
      var finalString = [];
      for (var i = 0; i < input.length; i++) {
        finalString.push(stringifyJSON(input[i]));
      }
      return '[' + finalString.join(',') + ']';
    } else {
      return '[]';
    }
  }

// Input is an object 
  if (typeof input === 'object') {
    var keys = Object.keys(input);
    if (keys.length > 0) {
      var finalString = '';

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (typeof key === 'function' || typeof input[key] === 'function') {
          return '{}';
        }
        var partialString = stringifyJSON(key) + ":" + stringifyJSON(input[key]);
        finalString += (i === keys.length - 1 ? partialString : partialString + ',');
      }
      return '{' + finalString + '}';
    } else {
      return '{}';
    }
  }

// Input is a number or boolean
  return input.toString();
};