(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $mdSidenav, $mdMedia, $mdUtil, $log) {
    var vm = this;

    vm.toggleLeft     = buildLeftToggler();
    vm.toggleChat     = buildRightToggler();
    vm.closeChat      = buildRightClose();
    vm.openChat       = buildRightOpen();
    vm.isChatOpen     = $mdMedia('gt-md');

    activate();

    function activate() {
      $timeout(function() {
        $log.info('Activated MainController');
      }, 4000);
    }


    function buildLeftToggler() {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav('left').toggle().then(function() {
          $log.info('Toggle Left Sidenav');
        });
      }, 300);
      return debounceFn;
    }
    function buildRightToggler() {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav('right').toggle().then(function() {
          $timeout(function() {
            vm.isChatOpen = !vm.isChatOpen;
            $log.info('Toggle Right Sidenav');
          }, 5000);
        });
      }, 300);
      return debounceFn;
    }
    function buildRightClose() {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav('right').close().then(function() {
          vm.isChatOpen = false;
          $log.info('Close Right Sidenav');
        });
      }, 300);
      return debounceFn;
    }
    function buildRightOpen() {
      var debounceFn = $mdUtil.debounce(function() {
        $mdSidenav('right').open().then(function() {
          vm.isChatOpen = true;
          $log.info('Open Right Sidenav');
        });
      }, 300);
      return debounceFn;
    }
    
  }
})();
