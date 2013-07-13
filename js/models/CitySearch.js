define("models/CitySearch", [
    "core/offline"
], function (offline) {
    'use strict';

    return Backbone.Model.extend({
        /**
         * Performs a basic string search on the list of cities and returns matching cities
         * @param  {String}   value    search term
         * @param  {Function} callback Callback to call when values are found
         */
        get: function (value, callback) {
            value = value.toLowerCase();

            if (value.length < 1) {
                return;
            }

            callback.call(this, _.filter(offline.cityList, function (city) {
                return city.name.toLowerCase().search(value) !== -1;
            }).slice(0, 5));
        }
    });

});