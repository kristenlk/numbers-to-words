(function n2wFactoryIIFE(){

  var n2wFactory = function($http, appSettings){
    var factory = {};
    // factory.number;
    factory.convertedWord;

    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    factory.getConvertedWord = function(number){

      if (number == 0 || number == 00 || number == 000) {
        factory.convertedWord = 'zero dollars';
        return;
      } else {
        factory.convertedWord = convertHundreds(number) + ' dollars';
        simpleStorage.set('convertedWord', factory.convertedWord);
        simpleStorage.set('number', number);
      }

      function convertHundreds(number){
        if (number > 99){
          return ones[Math.floor(number / 100)] + ' hundred ' + convertTens(number % 100);
        } else {
          return convertTens(number);
        }
      }

      function convertTens(number){
        if (number >= 20) {
          return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
        } else if (number >= 10 && number < 20) {
          // If number = 15, 15 - 10 = 5
          return teens[number - 10];
        } else {
          // Not just doing ones[number] to account for preceding zeros
          return ones[number % 10]
        }
      }

      simpleStorage.set();

    };

    return factory;
  };

  n2wFactory.$inject = ['$http', 'appSettings'];

  angular.module('n2wApp').factory('n2wFactory', n2wFactory);

})();
