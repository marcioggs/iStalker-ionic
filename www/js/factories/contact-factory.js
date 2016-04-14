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
      .then(function(response) {
        if (response.status == 200) {
          return response.data;
        } else {
          throw response;
        }
      }).catch(function(response) {
        var message;
        switch (response.status) {
          case 202:
            message = 'Data for this person is being prepared. Try again in 5 minutes.';
            break;
          case 404:
            message = 'Person not found.';
            break;
          default:
            message = 'An error has ocurred when searching for this person.';
        }
        throw message;
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
      var url = "img/profile-pic.png";

      if ('photos' in contact) {
        var photos = contact.photos;

        for (var i = 0; i < photos.length; i++) {
          var photo = photos[i];
          if (photo.isPrimary) {
            url = photo.url;
            break;
          }
        }
      }

      return url;
    },

    getSocialNetworkIconURL: function(typeId) {
      return FULL_CONTACT_API.BASE_URL + '/icon/' + typeId + '/64/default?apiKey=' + FULL_CONTACT_API.KEY;
    },

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
