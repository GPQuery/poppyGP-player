(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpNavbar', gpNavbar);

  /** @ngInject */
  function gpNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };
    return directive;
  }

})();