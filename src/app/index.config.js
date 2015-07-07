(function() {
  'use strict';

  angular
    .module('poppyGP')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {//, x2jsProvider) {

    //
    // Enable log
    //
    $logProvider.debugEnabled(true);

    //
    // Configure Material Themes
    //
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

    //
    // Configure X2JS Service
    //
    //x2jsProvider.config = {
      /*
      escapeMode               : true|false - Escaping XML characters. Default is true from v1.1.0+
      attributePrefix          : "<string>" - Prefix for XML attributes in JSon model. Default is "_"
      arrayAccessForm          : "none"|"property" - The array access form (none|property). Use this property if you want X2JS generates an additional property <element>_asArray to access in array form for any XML element. Default is none from v1.1.0+
      emptyNodeForm            : "text"|"object" - Handling empty nodes (text|object) mode. When X2JS found empty node like <test></test> it will be transformed to test : '' for 'text' mode, or to Object for 'object' mode. Default is 'text'
      enableToStringFunc       : true|false - Enable/disable an auxiliary function in generated JSON objects to print text nodes with text/cdata. Default is true
      arrayAccessFormPaths     : [] - Array access paths. Use this option to configure paths to XML elements always in "array form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
      skipEmptyTextNodesForObj : true|false - Skip empty text tags for nodes with children. Default is true.
      stripWhitespaces         : true|false - Strip whitespaces (trimming text nodes). Default is true.
      datetimeAccessFormPaths  : [] - Datetime access paths. Use this option to configure paths to XML elements for "datetime form". You can configure beforehand paths to all your array elements based on XSD or your knowledge. Every path could be a simple string (like 'parent.child1.child2'), a regex (like /.*\.child2/), or a custom function. Default is empty
      */
    //};
  }

})();
