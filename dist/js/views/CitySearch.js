define("views/CitySearch", ['models/CitySearch'], function (CitySearchModel) {

    var create = O.DOM.create;

    var CitySearch = Backbone.View.extend({
        className: 'city-search',

        lastValue_: '',

        events: {
            'keyup input': 'search',
            'focus input': 'onFocus',
            'blur input': 'onBlur',
            'click li': 'select'
        },

        // Self initialize own model
        initialize: function () {
            this.model = new CitySearchModel();
        },

        render: function () {
            this.$el.append(
                this.textInput_ = create('input', {
                    type: 'text',
                    className: this.options.klassName,
                    placeholder: this.options.placeholder
                }),

                this.autocomplete_ = create('ul', {
                    className: 'autocomplete'
                }),

                this.userMessage_ = create('span', {
                    className: 'user-message'
                })
            );

            return this;
        },

        // Throttle the searches to prevent too many requests
        search: _.throttle(function (e) {

            this.model.get(this.textInput_.value, _.bind(function (cities) {

                if (cities && cities.length > 0) {

                    this.autocomplete_.innerHTML = cities.map(function (city) {
                        return '<li data-id="' + city.id + '">' + city.name + '</li>';
                    }, this).join('');

                }

            }, this));

        }, 100),

        // Empty on focus
        onFocus: function () {
            this.textInput_.value = '';
        },

        // Fill on blur if we did have a previous value
        onBlur: function () {
            this.textInput_.value = this.lastValue_;
        },

        // Select the text and trigger change event
        select: function (e) {
            var el = e.target;

            this.lastValue_ = this.textInput_.value = el.textContent;

            this.trigger('change', {
                id: el.getAttribute('data-id'),
                name: el.textContent
            });

            $(this.userMessage_).text(this.options.message).addClass('show');

            this.autocomplete_.innerHTML = '';
        }
    });

    return CitySearch;

});