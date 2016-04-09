angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function($scope, ContactService) {

  $scope.form = {};

  $scope.search = function() {
    alert($scope.form.searchTerm);
    ContactService.test();
  };

});
