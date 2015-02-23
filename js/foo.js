
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

      hasValue: function()

  };


  return Foo;


})();



