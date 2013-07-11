define("views/CitySearch", ['models/CitySearch'], function (CitySearchModel) {

    var create = O.DOM.create;

    var CitySearch = Backbone.View.extend({
        className: 'city-search',

        autocomplete_: null,

        events: {
            'keyup input': 'search',
            'click li': 'select'
        },

        initialize: function () {
            this.model = new CitySearchModel();
        },

        render: function () {
            this.$el.append(this.textInput_ = create('input', {
                    type: 'text',
                    className: this.options.klassName,
                    placeholder: this.options.placeholder
                }),

                this.autocomplete_ = create('ul', {
                    className: 'autocomplete'
                }));

            return this;
        },

        search: _.throttle(function (e) {
            this.model.fetch(this.textInput_.value, function () {

            });
        }, 100),

        select: function () {

        }
    });

    return CitySearch;

});