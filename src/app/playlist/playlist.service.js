(function() {
  'use strict';

  angular
    .module('poppyGP')
    .factory('playlistService', playlistService);

  /** @ngInject */
  function playlistService($resource) {
    var url = 'api/playlist.xspf';
    var paramDefaults = {};
    var actions = {
      get: {
        method: 'GET',
        headers: {
          'Content-Type': 'text/xml'
        }
      }
    };
    return $resource(url, paramDefaults, actions);
    //https://github.com/jchris/xspf-to-jspf-parser
  }

})();