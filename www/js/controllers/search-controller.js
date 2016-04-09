angular.module('istalker.controllers.search', [])

  .controller('SearchCtrl', function ($scope, $state, ContactService, $ionicPopup) {

  $scope.contact = {};
    $scope.primaryPhotoUrl = '';
  //TODO: Para agilizar os testes. Remover posteriormente.
  $scope.stalkedEmail = 'marcioggs@gmail.com';

  $scope.searchTerm = function() {

    ContactService.findContact($scope.stalkedEmail)
      .then(function(contact) {
        $scope.contact = contact;
        $scope.primaryPhotoUrl = ContactService.getPrimaryPhotoURL($scope.contact);
        $state.go('result', $scope, {reload: true});
      })
      .catch(function(cause) {
        showErrorPopup(cause);
      });
  };

  function showErrorPopup(message) {
    $ionicPopup.alert({
      title: 'Error',
      template: message
    });
  }

});
