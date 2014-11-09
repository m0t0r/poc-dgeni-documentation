'use strict';

module.exports = function debugDeployment() {
  return {
    name: 'debug',
    examples: {
      commonFiles: {
        scripts: ['../../../vendor/angular/angular.js']
      },
      dependencyPath: '../../../'
    },
    scripts: []
  };
};
