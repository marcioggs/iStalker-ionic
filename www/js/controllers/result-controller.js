angular.module('istalker.controllers.results', [])

.controller('ResultCtrl', function ($scope, $rootScope, ContactService) {

  $scope.primaryPhotoUrl = function () {
   return ContactService.getPrimaryPhotoURL($rootScope.contact);
  }

  $scope.socialNetworkIconURL = function(typeId) {
    return ContactService.getSocialNetworkIconURL(typeId);
  }

  //TODO: Ver como herdar de um escopo da aplicação.
  $scope.openUrl = function(url) {
    window.open(url, "_blank", "location=yes");
  }

});
