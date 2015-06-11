'use strict';

angular.module('hearthboard.version', [
  'hearthboard.version.interpolate-filter',
  'hearthboard.version.version-directive'
])

.value('version', '0.1');
