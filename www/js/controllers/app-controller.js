angular.module('istalker.controllers.app', [])

.controller('AppCtrl', function ($scope, $ionicPopup, $ionicLoading) {

  $scope.showModalPopup = function(title, message) {
    $ionicPopup.alert({
      title: title,
      template: message
    });
  }

  $scope.openUrl = function(url) {
    window.open(url, '_blank', 'location=yes');
  }

  $scope.showLoadingUntilStateChange = function() {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>',
      hideOnStateChange: true
    });
  }

});
