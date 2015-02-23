
window.Foo = (function() {

  function Foo() {

  }

  Foo.prototype = {

      plusOne: function(num){
        return num += 1;
       },


      sortArray: function(myArray){
        return _.sortBy(myArray);
      },

      hasValue: function(array, value){
        return _.contains(array, value, [0]);
      }

  };

    Foo.greet =  function(name){
        return "Hello, " + name + "!";
      }



  return Foo;


})();



