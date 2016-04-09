angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function($scope, ContactService) {

  $scope.searchTermForm = {
    stalkedEmail: ''
  };

  $scope.searchTerm = function (stalkedEmail) {
    alert(stalkedEmail);
    //ContactService.test();
  };

});
