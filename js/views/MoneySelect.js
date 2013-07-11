define("views/MoneySelect", function () {

    var create = O.DOM.create;

    var MoneySelect = Backbone.View.extend({
        className: 'city-search',

        autocomplete_: null,
        lastValue_: '',

        events: {
            'keyup input': 'search',
            'focus input': 'onFocus',
            'blur input': 'onBlur',
            'click li': 'select'
        },

        render: function () {
            this.$el.append(this.textInput_ = create('input', {
                    type: 'text',
                    className: this.options.klassName,
                    placeholder: this.options.placeholder
                }),

                this.autocomplete_ = create('ul', {
                    className: 'autocomplete'
                }),

                this.userMessage_ = create('span', {
                    className: 'user-message'
                }));

            return this;
        },

        search: _.throttle(function (e) {

            this.model.fetch(this.textInput_.value, _.bind(function (cities) {

                if (cities && cities.length > 0) {

                    this.autocomplete_.innerHTML = cities.map(function (city) {
                        return '<li data-id="' + city.id + '">' + city.name + '</li>';
                    }, this).join('');

                }

            }, this));

        }, 100),

        onFocus: function(){
            this.textInput_.value = '';
        },

        onBlur: function(){
            this.textInput_.value = this.lastValue_;
        },

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

    return MoneySelect;

});