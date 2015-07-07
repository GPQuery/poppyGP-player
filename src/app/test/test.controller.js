(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($timeout, $log) {
    var vm = this;

    vm.imageNumber  = 0;
    vm.placeholder  = '';

    activate();

    function activate() {
      getImage();
      vm.debug = angular.fromJson(vm.playlist);
      $timeout(function() {
        $log.info('Activated TestController');
      }, 1000);
    }

    function getImage() {
      vm.imageNumber = Math.floor((Math.random() * 8) + 1);
      vm.placeholder = vm.imageNumber.toString() + '.jpg';
    }

  }
})();
