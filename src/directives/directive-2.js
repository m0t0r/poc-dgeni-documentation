/**
 * @ngdoc directive
 * @name directive2
 * @module dgeniDemo.directive2
 * @kind directive
 *
 * @description Simplest demo directive
 */
angular
  .module('dgeniDemo.directive2', [])
  .directive('directive2', function() {
    return {
      replace: true,
      template: '<h3>Hi!, I am directive 2</h3>'
    }
  });
