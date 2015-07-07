(function() {
  'use strict';

  angular
    .module('poppyGP')
    .factory('dataService', dataService);

  /** @ngInject */
  function dataService($resource) {
    return $resource('api/:data.json');
  }

})();