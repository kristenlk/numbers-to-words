(function n2wControllerIIFE(){

  var n2wController = function(n2wFactory, appSettings){

    var vm = this;
    vm.number;
    vm.convertedWord;
    vm.onlyNumbers = /^\d+$/;

    vm.getConvertedNumber = function(){
      n2wFactory.getConvertedWord(vm.number);
      vm.convertedWord = n2wFactory.convertedWord;
    }

    // Checks if numbers / converted words are in simpleStorage; if so, displays them
    function init(){
      if (simpleStorage.get('number') !== undefined) {
        vm.number = simpleStorage.get('number');
      };

      if (simpleStorage.get('convertedWord') !== undefined) {
        vm.convertedWord = simpleStorage.get('convertedWord');
      };
    }

    init();

  };

  n2wController.$inject = ['n2wFactory', 'appSettings'];

  angular.module('n2wApp').controller('n2wController', n2wController);

})();
