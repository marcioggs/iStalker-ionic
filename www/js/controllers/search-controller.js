angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function ($scope, $rootScope, $state, ContactService, $ionicPopup) {

  $rootScope.contact = {};
  $rootScope.primaryPhotoUrl = '';
  //TODO: Para agilizar os testes. Remover posteriormente.
  $rootScope.stalkedEmail = 'marcioggs@gmail.com';

  $scope.searchTerm = function() {

    ContactService.findContact($scope.stalkedEmail).then(function (contact) {
      $rootScope.contact = contact;
        $state.go('result', ContactService, {reload: true});
    })
    .catch(function (cause) {
      showErrorPopup(cause);
    });
  }

  function showErrorPopup(message) {
    $ionicPopup.alert({
      title: 'Error',
      template: message
    });
  }

});
