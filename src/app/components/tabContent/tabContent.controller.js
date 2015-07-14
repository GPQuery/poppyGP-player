(function() {
  'use strict';

  angular
    .module('poppyGP')
    .controller('TabContentController', TabContentController);

  /** @ngInject */
  function TabContentController($timeout, $log) {
    var vm = this;

    vm.tabsContent = [];

    activate();

    function activate() {
      getAllTabs();
      $timeout(function() {
        $log.info('Activated TabContentController');
      }, 4000);
    }

    function getAllTabs()   {
      vm.tabsContent = [{
        'label'   : '/r/poppyGP',
        'icon'    : 'fa-reddit',
        'template': '<iframe class="reddit-frame" layout-fill src="https://reddit.com/r/poppygp"></iframe>'
      }, {
        'label'   : '#f1 on Snoonet',
        'icon'    : 'fa-comments',
        'template': '<iframe class="webchat-frame" layout-fill src="https://kiwiirc.com/client/irc.snoonet.org/?nick=poppygp-|?&theme=mini#f1"></iframe>'
      }, {
        'label'   : '@poppyGrandPrix',
        'icon'    : 'fa-twitter',
        'template': '<iframe class="twitter-frame" layout-fill src="https://twitter.com"></iframe>'
      }];
    }

  }

})();