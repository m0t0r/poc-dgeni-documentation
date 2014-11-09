'use strict';

module.exports = function defaultDeployment() {
  return {
    name: 'default',
    examples: {
      commonFiles: {
        scripts: ['../../../vendor/angular/angular.min.js']
      },
      dependencyPath: '../../../'
    },
    scripts: []
  };
};