angular.module('istalker.controllers.search', [])

  .controller('SearchCtrl', function ($scope, $rootScope, $state, ContactService) {

    $rootScope.contact = {};
    $rootScope.primaryPhotoUrl = '';
  //TODO: Para agilizar os testes. Remover posteriormente.
    $rootScope.stalkedEmail = 'marcioggs@gmail.com';
  $scope.searchTerm = function() {
    //TODO: Tratar erros da API.
    ContactService.findContact($rootScope.stalkedEmail).then(function (contact) {
      $rootScope.contact = contact;


      $state.go('result', null, {reload: true});
    });


  };

});
