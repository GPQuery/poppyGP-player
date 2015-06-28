(function() {
  'use strict';

  angular
    .module('pgpPlayer')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
