exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var defer = $.Deferred();
    setTimeout(function () {
      defer.resolve(value);
    }, 1000);
    return defer.promise();
  },

  manipulateRemoteData: function(url) {
    var defer = $.Deferred();

    $.ajax(url).then(function (result) {
      var people = [];
      $.each(result.people, function (index, value) {
        people.push(value.name);
      });
      defer.resolve(people.sort());
    });
    return defer.promise();
  }
};
