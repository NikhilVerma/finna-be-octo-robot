define("views/app", [
    "views/Header",
    "views/FlightResultView"
], function (HeaderView, FlightResultView) {

    var View = O.View.extend({
        className: 'app',

        flightView_: null,

        update: function (body) {
            body.appendChild(this.el);

            this.insertView(new HeaderView({
                title: 'Octoflights Search Engine'
            }));

            this.insertView(this.flightView_ = new FlightResultView());

            this.flightView_.update({
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