// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {

  if (input === null) {
    return 'null';
  }

  if (input === undefined) {
    return '';
  }

  if (typeof input === 'string') {
    return '"' + input + '"';
  }

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

  return input.toString();
};