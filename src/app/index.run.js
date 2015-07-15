(function() {
  'use strict';

  angular
    .module('poppyGP')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
