define("models/FlightSearch", [
    "core/offline"
], function (offline) {
    'use strict';

    return Backbone.Model.extend({

        /**
         * Passes the data to the fake flight generator and performs a basic flight price filtering
         * @param  {Object}   data     Flight search settings
         * @param  {Function} callback
         */
        get: function (data, callback) {
            var searchResult = _.filter(offline.getFlights(data), function (item) {
                return data.priceRange.from <= item.price && item.price <= data.priceRange.to;
            });

            callback.call(this, searchResult);
        }
    });

});