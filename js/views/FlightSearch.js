define("views/FlightSearch", [
        'views/CitySearch',
        'views/DateSelect',
        'views/PeopleSelect',
        'views/MoneySelect'
    ], function (CitySearch, DateSelect, PeopleSelect, MoneySelect) {

        var create = O.DOM.create;

        var FlightSearchView = Backbone.View.extend({
            className: 'flight-search',
            tagName: 'form',

            render: function () {
                this.$el.append(
                    new CitySearch({
                        klassName: 'going-city',
                        placeholder: 'So, where do you want to fly from?',
                        message: 'That\'s a charming place'
                    }).render().el,

                    new CitySearch({
                        klassName: 'return-city',
                        placeholder: 'And where do you wish to go?',
                        message: 'I\'ve heard the weather is lovely there!'
                    }).render().el,

                    new DateSelect({
                        klassName: 'going-date',
                        placeholder: 'When would you like to fly?',
                        message: 'That\'s a good day to be travelling'
                    }).render().el,

                    new DateSelect({
                        klassName: 'return-date',
                        placeholder: 'Do you want to come back?',
                        message: 'Aaaand we\'re back'
                    }).render().el,

                    new PeopleSelect({
                        placeholder: 'How many people be travelling with ya?'
                    }).render().el,

                    new MoneySelect({
                        placeholder: 'How tight is your wallet?'
                    }).render().el
            );

        return this;
    },

    update: function (data) {

    }
});

return FlightSearchView;

});