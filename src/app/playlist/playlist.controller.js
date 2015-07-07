(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('PlaylistController', PlaylistController);

  /** @ngInject */
  function PlaylistController($timeout, dataService, playlistService, $log) {
    var vm = this;

    vm.tracks       = [];
    vm.trackCurrent = '';
    vm.trackLast    = '';
    vm.trackNext    = '';

    activate();

    function activate() {
      $timeout(function() {
        getTracks();
        updateTracks();
        $log.info('Activated PlaylistController');
      }, 4000);
    }

    function getTracks() {
      dataService.get().$promise
        .then(function(response) {
          $log.info('getTracks responded with ' + response);
          return response;
        }, function(errorMsg) {
          $log.warn('getTracks failed with ' + errorMsg);
          return errorMsg;
        });
    }

    function updateTracks() {
      $log.info('updateTracks called');
    }

  }
})();
