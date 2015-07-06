(function() {
  'use strict';

  angular
    .module('poppyGP')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
