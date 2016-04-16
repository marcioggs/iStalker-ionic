angular.module('istalker.controllers.app', [])

.controller('AppCtrl', function ($scope, $ionicPopup, $ionicLoading, $http) {

  $scope.showModalPopup = function(title, message) {
    $ionicPopup.alert({
      title: title,
      template: message
    });
  }

  $scope.openUrl = function(url) {
    window.open(url, '_blank', 'location=yes');
  }

  $scope.isRequestingData = function() {
    return $http.pendingRequests.length > 0;
  };

  $scope.$watch($scope.isRequestingData, function(isRequestingData) {
    if(isRequestingData){
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
    }else{
      $ionicLoading.hide();
    }
  });

});
