angular.module('istalker.factories.history', [])

.factory('HistoryService', function() {

  //TODO: Ver se tem como fazer bind do local storage com o model.
  //TODO: Colocar botão de excluir na interface.
  var lsKey = 'history';

  function listEmails() {
    var emails = JSON.parse(localStorage.getItem(lsKey));
    if (emails == null) {
      emails = [];
      updateLocalStorage(emails);
    }
    return emails;
  }

  function addEmailToTop(email) {
    var emails = listEmails();
    emails.unshift(email);
    updateLocalStorage(emails);
  }

  function removeEmail(email) {
    var emails = listEmails();
    var index = emails.indexOf(email);
    if (index !== -1) {
      emails.splice(index, 1);
    }
    updateLocalStorage(emails);
  }

  function updateLocalStorage(emails) {
    localStorage.setItem(lsKey, JSON.stringify(emails));
  }

  return {

    list: function() {
      return listEmails();
    },

    add: function(email) {
      removeEmail(email);
      addEmailToTop(email);
    },

    remove: function(email) {
      removeEmail(email);
    }

  };
});
