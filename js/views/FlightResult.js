define("views/FlightResult", function () {

    var create = O.DOM.create;

    var FlightResultView = Backbone.View.extend({
        className: 'flight-result',

        events: {
            'click button': 'book'
        },

        book: function () {
            debugger;
        },

        render: function () {
            this.el.appendChild(create('div', {
                content: [
                    this.price_ = create('span', {
                        className: 'price'
                    }),
                    this.going_ = create('div', {
                        className: 'going',
                        content: [
                            this.goingFlight_ = create('span',{
                                className: 'flight'
                            }),
                            this.goingConnection_ = create('span',{
                                className: 'connection'
                            }),
                            this.goingDepart_ = create('span',{
                                className: 'depart'
                            }),
                            this.goingArrive_ = create('span',{
                                className: 'arrive'
                            })
                        ]
                    }),
                    this.return_ = create('div', {
                        className: 'return',
                        content: [
                            this.returnFlight_ = create('span',{
                                className: 'flight'
                            }),
                            this.returnConnection_ = create('span',{
                                className: 'connection'
                            }),
                            this.returnDepart_ = create('span',{
                                className: 'depart'
                            }),
                            this.returnArrive_ = create('span',{
                                className: 'arrive'
                            })
                        ]
                    }),
                    this.book_ = create('button', {
                        className: 'book',
                        text: 'Book this flight'
                    })
                ]
            }));

            return this;
        },

        update: function (data) {
            this.price_.textContent = data.currency + ' ' + data.price;

            // Book flight button
            this.book_.setAttribute('data-id', data.id);

            // Going
            this.goingFlight_.textContent = data.goingWay.flight;
            this.goingConnection_.textContent = data.departureCity + ' > ' + data.arrivalCity;
            this.goingDepart_.textContent = 'Departure: ' + data.goingWay.departure;
            this.goingArrive_.textContent = 'Arrival: ' + data.goingWay.departure;

            // Return
            if (data.returnWay) {
                this.returnFlight_.textContent = data.returnWay.flight;
                this.returnConnection_.textContent = data.departureCity + ' > ' + data.arrivalCity;
                this.returnDepart_.textContent = 'Departure: ' + data.returnWay.departure;
                this.returnArrive_.textContent = 'Arrival: ' + data.returnWay.departure;

                this.el.className = 'flight-result return';
            } else {
                this.el.className = 'flight-result';
            }
        }
    });

    return FlightResultView;

});