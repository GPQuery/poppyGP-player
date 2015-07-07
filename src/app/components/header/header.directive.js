(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpHeader', gpHeader);

  /** @ngInject */
  function gpHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html'
    };

    return directive;

    
  }

})();