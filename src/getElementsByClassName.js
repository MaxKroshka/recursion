// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {

  var results = [];

  var inspect = function(currentNode) {

    var childrenNodes = currentNode.childNodes;
    for (var i = 0; i < childrenNodes.length; i++) {
      var elementClasses = childrenNodes[i].classList;
      if (elementClasses && elementClasses.contains(className)) {
        results.push(childrenNodes[i]);
      }
      if (childrenNodes[i].childNodes.length > 0) {
        inspect(childrenNodes[i]);
      }
    }
  }
  inspect(document);
  return results;
};