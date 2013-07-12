define("models/FlightSearch", [
    "core/offline"
], function (offline) {
    'use strict';

    return Backbone.Model.extend({
        get: function (data, callback) {
            data.minPrice = 2000;
            data.maxPrice = 5000;

            var searchResult = _.filter(offline.getFlights(data), function (item) {
                return data.minPrice <= item.price && item.price <= data.maxPrice;
            });

            callback.call(this, searchResult);
        }
    });

});