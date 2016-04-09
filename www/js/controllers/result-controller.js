angular.module('istalker.controllers.results', [])

  .controller('ResultCtrl', function ($scope, $rootScope, ContactService) {


    $rootScope.primaryPhotoUrl = function () {
     return ContactService.getPrimaryPhotoURL($rootScope.contact);
    }
  });
