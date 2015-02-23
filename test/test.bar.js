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

  describe("exponentOf", function() {

        it("multiplies a number by itself as many times as the exponent", function() {
          var exponentOf5 = bar.exponentOf(5);
          expect( exponentOf5(4) ).eq(Math.pow(4,5));
        });
      });

  describe("reverseString", function() {

      it("splits a string into an array", function() {
        expect( bar.reverseString("string") ).eq("gnirts");
      });
    });

  describe("cipher", function() {

      it("takes a string and returns a character", function() {
        expect( bar.cipher("hello") ).eq("ÌÉÐÐÓ");
      });
    });

  describe("decipher", function() {

      it("takes a ciphered string and returns a deciphered string", function() {
        expect( bar.decipher("ÌÉÐÐÓ") ).eq("hello");
      });
    });



}); //end 






