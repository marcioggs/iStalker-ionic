angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function ($scope, $rootScope, $state, ContactService, HistoryService) {

  $scope.stalkedEmail = 'marcioggs@gmail.com'; //TODO: Para agilizar os testes. Remover posteriormente.

  $scope.searchTerm = function(stalkedEmail) {

    ContactService.findContact(stalkedEmail).then(function (contact) {
        $rootScope.contact = contact;
        HistoryService.add(stalkedEmail);
        $state.go('app.result');
      })
      .catch(function (cause) {
        //TODO: Estudar decorator de tratamento de exceção para ver se é melhor.
        $scope.showModalPopup('Error', cause);
      });
  }

  $scope.historyList = function() {
    return HistoryService.list();
  }

});
