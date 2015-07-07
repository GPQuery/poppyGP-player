(function() {
  'use strict';

  angular
    .module('poppyGP')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Extend Palettes
    var gpGreyMap = $mdThemingProvider.extendPalette('grey', {
      '300':  'e5e5e5',
      '500':  '333333',
      '800':  '424242',
      'A100': 'd3d3d3',
      'contrastDefaultColor': 'light',
      'contrastDarkColors'  : ['300', 'A100']
    });
    var gpRedMap    = $mdThemingProvider.extendPalette('red', {
      '300':  'ff2e2e',
      '500':  'e90000',
      //'800':  'bb0000',
      '800':  '910000',
      'A100': 'ff5a5a',
      'contrastDefaultColor': 'light',
      'contrastDarkColors'  : ['300', 'A100']
    });
    var gpOrangeMap = $mdThemingProvider.extendPalette('orange', {
      '300':  'feb360',
      '500':  'e89538',
      //'800':  'c87415',
      '800':  '9f5605',
      'A100': 'ffc889',
      'contrastDefaultColor': 'light',
      'contrastDarkColors'  : ['300', 'A100']
    });

    // Register Maps
    $mdThemingProvider
      .definePalette('primary',  gpGreyMap    )
      .definePalette('accent',   gpRedMap     )
      .definePalette('warning',  gpOrangeMap  );

    // Set Default Palettes
    $mdThemingProvider.theme('default')
            .primaryPalette ('primary')
            .accentPalette  ('accent' )
            .warnPalette    ('warning');
  }

})();
