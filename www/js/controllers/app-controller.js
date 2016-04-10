angular.module('istalker.controllers.app', [])

.controller('AppCtrl', function ($scope, $ionicPopup) {

  $scope.showModalPopup = function(title, message) {
    $ionicPopup.alert({
      title: title,
      template: message
    });
  }

  $scope.openUrl = function(url) {
    window.open(url, '_blank', 'location=yes');
  }

});
