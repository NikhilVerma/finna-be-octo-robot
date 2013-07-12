define("models/CitySearch", [
    "core/offline"
], function (offline) {
    'use strict';

    return Backbone.Model.extend({
        get: function (value, callback) {
            value = value.toLowerCase();

            if (value.length < 1) {
                return;
            }

            callback.call(this, _.filter(offline.cityList, function (city) {
                return city.name.toLowerCase().search(value) !== -1;
            }).slice(0, 5));
        },

        getAllCities: function (callback) {
            callback.call(this, offline.cityList);
        }
    });

});