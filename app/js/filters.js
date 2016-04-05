//convert snake_case to kebab-case
app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g, "-");
  }
});


//Returns an acronym
app.filter('acronym', function() {
  return function(input){
    return input;
  }
});


//Alternates capitalization of string
app.filter('aLtCaPs', function() {
  return function(input){
    var strArr = input.split("");
    for(var i=0; i < strArr.length; i++) {
      if (i % 2) {
        strArr[i] = strArr[i].toLowerCase();
      } else {
        strArr[i] = strArr[i].toUpperCase();
      }
    }
    return strArr.join("");
  }
});


//Use with ng-repeat and filter the collection
app.filter('startsWithZ', function () {
  return function(input) {
    var result = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].name.charAt(0) === "Z") {
        result.push(input[i]);
      }
    }
    return result;
  }
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, search) {
    return input
  }
});

//Come up with on your own
app.filter('?????', function() {
  //Do Cool Things...
});
