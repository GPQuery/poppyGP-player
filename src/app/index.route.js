(function() {
  'use strict';

  angular
    .module('poppyGP')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'app/test/test.html',
        controller: 'TestController',
        controllerAs: 'sc'
      });

    $urlRouterProvider.otherwise('/test');
  }

})();
