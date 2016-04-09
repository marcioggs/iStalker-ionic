angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function($scope, ContactService) {

  $scope.contact = {};
  //TODO: Para agilizar os testes. Remover posteriormente.
  $scope.stalkedEmail = 'marcioggs@gmail.com';

  $scope.searchTerm = function() {
    //TODO: Tratar erros da API.
    ContactService.findContact($scope.stalkedEmail).then(function(contact) {
      $scope.contact = contact;
      //TODO: Remover alert após implementar resultado.
      alert(contact.contactInfo.fullName);
    });
  };

});
