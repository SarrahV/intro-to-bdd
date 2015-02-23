describe("Bar", function() { //start
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function() {

    it("multiplies a number by itself", function() {
      expect( bar.squared(4) ).eq(16);
    });
  });

  describe("cubed", function() {

      it("multiplies a number by itself 3 times", function() {
        expect( bar.cubed(4) ).eq(64);
      });
    });



}); //end 