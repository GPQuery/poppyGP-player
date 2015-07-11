(function() {
  'use strict';

  angular
    .module('poppyGP')
    .directive('gpTabContent', gpTabContent);

  /** @ngInject */
  function gpTabContent() {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/tabContent/tabContent.html',
      controller: 'TabContentController',
      controllerAs: 'vmm'
    };
    return directive;
  }

})();