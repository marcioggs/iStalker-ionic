angular.module('istalker.factories.contact', [])

.factory('ContactService', function($http, FULL_CONTACT_API) {

  return {

    findContact: function(email) {
      return $http({
        url: FULL_CONTACT_API.BASE_URL + '/person.json',
        method: 'GET',
        params: {
          apiKey: FULL_CONTACT_API.KEY,
          email: email
        }
      })
        .then(function(ret) {
          return ret.data;
        });
    },

    getPhotoURL: function(contact, typeId) {
      var url = "";
      var photos = contact.photos;

      for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        if (photo.typeId == typeId) {
          url = photo.url;
          break;
        }
      }

      return url;
    },

    getPrimaryPhotoURL: function(contact) {
      var url = "";
      var photos = contact.photos;

      for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        if (photo.isPrimary) {
          url = photo.url;
          break;
        }
      }

      return url;
    },

    getSocialNetworkIconURL: function(typeId) {
      return FULL_CONTACT_API.BASE_URL + '/icon/' + typeId + '/64/default?apiKey=' + FULL_CONTACT_API.KEY;
    },

    //TODO: Remover esta função após usá-la no controller.
    test: function() {
      var obj = this;

      obj.findContact('marcioggs@gmail.com').then(function(contact) {
        console.log('findContact: \n');
        console.log(contact);

        console.log('\n');
        console.log('getPhotoURL: \n')
        var photoURL = obj.getPhotoURL(contact, 'facebook');
        console.log(photoURL);

        console.log('\n');
        console.log('getPrimaryPhotoURL: \n')
        var primaryPhotoURL = obj.getPrimaryPhotoURL(contact);
        console.log(primaryPhotoURL);

        console.log('\n');
        console.log('getSocialNetworkIconURL: \n')
        var socialNetworkIconURL = obj.getSocialNetworkIconURL('facebook');
        console.log(socialNetworkIconURL);
      });
    }
  };
});
