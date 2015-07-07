(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('poppyGP'));

    it('should have a non-empty string placeholder', inject(function($controller) {
      var vm = $controller('TestController');

      expect(angular.isString(vm.placeholder)).toBeTruthy();
      expect(vm.placeholder.length > 20).toBeTruthy();
    }));

    it('should have a placeholder number between 1 and 8', inject(function($controller) {
      var vm = $controller('TestController');

      expect(angular.isNumber(vm.imageNumber)).toBeTruthy();
      expect(vm.imageNumber >= 1 && vm.imageNumber <= 8).toBeTruthy();
    }));
  });
})();