(function () {
  'use strict';

  angular.module('davestone.sugarDates', [])

    .filter('relative', function() {
      return function(datetime) {
        return Date.create(datetime).relative();
      };
    });

}());
