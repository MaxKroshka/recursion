// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {

  if (input === null) {
    return null;
  }

  if (input === undefined) {
    return '';
  }

  if (typeof input === 'string') {
    return '' + input;
  }
  if (Array.isArray(input)) {
    if (input.length > 0) {
      var finalString = [];
      for (var i = 0; i < input.length; i++) {
        finalString.push(stringifyJSON(input[i]));
      }
    } else {
      return '[]';
    }
  }
};