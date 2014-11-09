/**
 * @ngdoc directive
 * @name directive1
 * @module dgeniDemo.directive1
 * @kind directive
 *
 * @description Simplest demo directive
 */
angular
  .module('dgeniDemo.directive1', [])
  .directive('directive1', function() {
    return {
      replace: true,
      template: '<h3>Hi!, I am directive 1</h3>'
    }
  });
