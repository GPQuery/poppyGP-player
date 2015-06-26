(function() {
  'use strict';
/**
 * @ngdoc module
 * @name poppyGP.components.videoFrame
 * @description Video `iframe` Element
 */
angular.module('poppyGP.components.videoFrame', [
  'poppyGP.core'
])
  .filter('gpSrcTrust', GpSrcTrustFilter)
  .directive('gpVideoFrame', GpVideoFrameDirective);
/**
 * @ngdoc filter
 * @name gpSrcTrust
 * @module poppyGP.components.videoFrame
 */
function GpSrcTrustFilter($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}
 
/**
 * @ngdoc directive
 * @name gpVideoFrame
 * @module poppyGP.components.videoFrame
 * @restrict E
 *
 * @param {string=} gp-src String containing URL of video stream, beginning with http://
 */
function GpVideoFrameDirective(gpSrcTrust) {
  return {
    restrict: 'E',
    scope: {
      src: '@'
    },
    replace: true,
    transclude: true,
    template: '<iframe class="video-frame" height="100%" width="100%" frameborder="0"></iframe>',
    link: function link(scope, element, attrs) {
      element.attr('src', scope.src);
    }
  };

  
}
})();