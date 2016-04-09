angular.module('istalker.controllers.search', [])

  .controller('SearchCtrl', function ($scope, $state, ContactService) {

  $scope.contact = {};
    $scope.primaryPhotoUrl = '';
  //TODO: Para agilizar os testes. Remover posteriormente.
  $scope.stalkedEmail = 'marcioggs@gmail.com';

  $scope.searchTerm = function() {
    //TODO: Tratar erros da API.
    ContactService.findContact($scope.stalkedEmail).then(function(contact) {
      $scope.contact = contact;
      //TODO: Remover alert após implementar resultado.
      alert(contact.contactInfo.fullName);

      $scope.primaryPhotoUrl = ContactService.getPrimaryPhotoURL($scope.contact);
      alert($scope.primaryPhotoUrl);

    });


    $state.go('result', $scope, {reload: true});
  };

});
