angular.module('istalker.controllers.search', [])

.controller('SearchCtrl', function($scope, ContactService) {

  $scope.searchTermForm = {
    stalkedEmail: ''
  };

  $scope.contact = {};

  $scope.searchTerm = function (stalkedEmail) {
    ContactService.findContact(stalkedEmail).then(function(contact) {
      $scope.contact = contact;
      alert(contact.contactInfo.fullName);
    });
  };

});
