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

        initialize: function () {
            this.departCity_ = new CitySearch({
                klassName: 'depart-city',
                placeholder: 'So, where do you want to fly from?',
                message: 'That\'s a charming place'
            });
            this.listenTo(this.departCity_, 'change', this.handleDepartChange_);

            this.arriveCity_ = new CitySearch({
                klassName: 'arrive-city',
                placeholder: 'And where do you wish to go?',
                message: 'I\'ve heard the weather is lovely there!'
            });
            this.listenTo(this.arriveCity_, 'change', this.handleArriveChange_);

            this.dateSelect_ = new DateSelect({
                placeholder: 'When would you like to fly? If you wish to come back, select that date as well.'
            });
            this.listenTo(this.dateSelect_, 'change', this.handleDateChange_);

            this.peopleSelect_ = new PeopleSelect({
                placeholder: 'How many people are travelling?',
                max: 10,
                min: 1
            });
            this.listenTo(this.peopleSelect_, 'change', this.handlePeopleChange_);


            _.bindAll(this, 'handleSearchResponse_');
        },

        render: function () {
            this.$el.append(
                this.departCity_.render().el,
                this.arriveCity_.render().el,
                this.dateSelect_.render().el,
                this.peopleSelect_.render().el,

                new MoneySelect({
                    placeholder: 'How tight is your wallet?'
                }).render().el
            );

            return this;
        },

        handleArriveChange_: function (arrive) {
            this.arrivingCity_ = arrive;
            this.doSearch_();
        },

        handleDepartChange_: function (depart) {
            this.departingCity_ = depart;
            this.doSearch_();
        },

        handlePeopleChange_: function (people) {
            this.numPassengers_ = Math.min(1, people);
            this.doSearch_();
        },

        handleDateChange_: function(dates) {
            this.departDate_ = dates[0];
            this.returnDate_ = null;

            if (dates.length > 1) {
                this.returnDate_ = dates[1];
            }

            this.doSearch_();
        },

        doSearch_: function () {
            if (this.departingCity_ && this.arrivingCity_ && this.departDate_) {

                this.model.get({
                    depart: this.departingCity_,
                    arrive: this.arrivingCity_,
                    departDate: this.departDate_,
                    returnDate: this.returnDate_
                }, this.handleSearchResponse_);

            }
        },

        handleSearchResponse_: function (response) {
            this.trigger('didSearch', response);
        }
    });

    return FlightSearchView;

});