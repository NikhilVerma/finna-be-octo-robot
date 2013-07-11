define("views/FlightSearch", ['views/CitySearch'], function (CitySearch) {

    var create = O.DOM.create;

    var FlightSearchView = Backbone.View.extend({
        className: 'flight-search',
        tagName: 'form',

        render: function () {
            this.$el.append(this.tabs_ = create('div', {
                    className: 'tabs',
                    content: [
                        create('span', {
                            className: 'going-way',
                            text: 'One Way'
                        }),
                        create('span', {
                            className: 'return-way',
                            text: 'Return Way'
                        })
                    ]
                }),

                create('div', {
                    className: 'search-settings',
                    content: [
                        new CitySearch({
                            klassName: 'going-city',
                            placeholder: 'Enter origin city'
                        }).render().el,

                        new CitySearch({
                            klassName: 'return-city',
                            placeholder: 'Enter destination city'
                        }).render().el,

                        create('input', {
                            type: 'date',
                            className: 'going-date'
                        }),

                        create('input', {
                            type: 'date',
                            className: 'return-date'
                        }),

                        create('select')
                    ]
                }),

                create('div', {
                    content: 'Slider resides here'

                })
            );

            return this;
        },

        update: function (data) {

        }
    });

    return FlightSearchView;

});