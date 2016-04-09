angular.module('istalker.controllers.results', [])

  .controller('ResultCtrl', function ($scope, $rootScope, ContactService) {


    $scope.primaryPhotoUrl = function () {
     return ContactService.getPrimaryPhotoURL($rootScope.contact);
    }

    $scope.socialNetworkIconURL = function(typeId) {
      return ContactService.getSocialNetworkIconURL(typeId);
    }
  });
