angular.module('istalker.controllers.results', [])

  .controller('ResultCtrl', function ($scope, $rootScope, ContactService) {

    //TODO: obter a foto neste controller não está funcioanndo
    $rootScope.primaryPhotoUrl = 'http://placekitten.com/200/300';

    /*$rootScope.primaryPhotoUrl =  function() {
     alert(ContactService.getPrimaryPhotoURL($rootScope.contact));
     return ContactService.getPrimaryPhotoURL($rootScope.contact);
     }*/


  });
