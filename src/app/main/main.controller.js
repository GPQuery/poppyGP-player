(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $mdSidenav, $mdMedia, $mdUtil, $log) {
    var vm = this;

    vm.toggleLeft     = buildToggler('left');
    vm.toggleRight    = buildToggler('right');
    vm.isChatOpen     = true;

    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav(navID).toggle().then(function() {
          vm.isChatOpen = false;
        });
      }, 300);
      return debounceFn;
    }

    activate();

    function activate() {
      $timeout(function() {
        buildToggler();
        $log.info('Activated MainController');
      }, 4000);
    }

  }
})();
