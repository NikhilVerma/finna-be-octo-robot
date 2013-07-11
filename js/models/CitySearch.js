define("models/CitySearch", function () {
    'use strict';

    var offlineCityList = ['Pune', 'Bangalore', 'Lucknow'];

    return Backbone.Model.extend({
        fetch: function (value, callback) {
            value = value.toLowerCase();

            callback.apply(this, _.filter(offlineCityList, function (city) {
                return city.search(value) !== -1;
            }));
        }
    });

});