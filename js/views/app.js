define("views/app", [
    "views/Header",
    "views/FlightResult",
    "views/FlightSearch",
    "models/FlightSearch"
], function (HeaderView, ResultView, SearchView, SearchModel) {

    var View = Backbone.View.extend({
        className: 'app',

        flightView_: null,

        update: function (body) {
            body.appendChild(this.el);

            this.$el.append(new HeaderView({
                title: 'You want to travel'
            }).render().el);

            this.searchView_ = new SearchView({
                model: new SearchModel()
            });
            this.$el.append(this.searchView_.render().el);

            this.resultView_ = new ResultView();
            this.$el.append(this.resultView_.render().el);

            this.resultView_.update({
                id: 1,
                price: 9000,
                currency: 'INR',
                departureCity: 'PNQ',
                arrivalCity: 'DEL',

                goingWay: {
                    flight: 'IA-109',
                    departure: new Date().getTime(),
                    arrival: new Date().getTime()
                },

                returnWay: {
                    flight: 'IA-109',
                    departure: new Date().getTime(),
                    arrival: new Date().getTime()
                }
            });


        }
    });

    return new View();

});