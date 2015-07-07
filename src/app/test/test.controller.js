(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('TestController', TestController);

  /** @ngInject */
  function TestController($timeout, $mdSidenav, $mdMedia, $mdUtil, $log) {
    var vm = this;

    vm.imageNumber  = 0;
    vm.placeholder  = '';

    activate();

    function activate() {
      getImage();
      $timeout(function() {
        $log.info('Activated TestController');
        $log.info('vm.imageNumber = ' + vm.imageNumber);
        $log.info('vm.placeholder = ' + vm.placeholder);
      }, 1000);
    }

    function getImage() {

      vm.imageNumber = Math.floor((Math.random() * 8) + 1);

      vm.placeholder = vm.imageNumber.toString() + '.jpg';

    }

  }
})();
