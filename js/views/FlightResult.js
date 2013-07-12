define("views/FlightResult", function () {

    var create = O.DOM.create;

    var FlightResultView = Backbone.View.extend({
        className: 'flight-result',

        events: {
            'click button': 'doBooking_'
        },

        doBooking_: function () {
        },

        render: function () {
            this.$el.append(
                create('span', {
                    className: 'price',
                    content: [
                        this.price_ = create('span'),

                        this.book_ = create('button', {
                            className: 'book green-button',
                            text: 'Book this flight'
                        })
                    ]
                }),

                this.going_ = create('div', {
                    className: 'going',
                    content: [
                        this.goingFlight_ = create('span', {
                            className: 'flight'
                        }),
                        this.goingConnection_ = create('span', {
                            className: 'connection'
                        }),
                        this.goingDepart_ = create('span', {
                            className: 'depart'
                        }),
                        this.goingGap_ = create('span', {
                            className: 'gap'
                        }),
                        this.goingArrive_ = create('span', {
                            className: 'arrive'
                        })
                    ]
                }),

                this.return_ = create('div', {
                    className: 'return',
                    content: [
                        this.returnFlight_ = create('span', {
                            className: 'flight'
                        }),
                        this.returnConnection_ = create('span', {
                            className: 'connection'
                        }),
                        this.returnDepart_ = create('span', {
                            className: 'depart'
                        }),
                        this.returnGap_ = create('span', {
                            className: 'gap'
                        }),
                        this.returnArrive_ = create('span', {
                            className: 'arrive'
                        })
                    ]
                })
            );

            return this;
        },

        update: function (data) {
            this.price_.innerHTML = '<strong>' + data.currency + '</strong> ' + data.price;

            // Book flight button
            this.book_.setAttribute('data-id', data.id);

            // Going
            this.goingFlight_.textContent = data.goingWay.flight;
            this.goingConnection_.textContent = data.departureCity + ' to ' + data.arrivalCity;
            this.goingDepart_.innerHTML = '<strong>Flies:</strong> ' + moment(data.goingWay.departure).format('MMMM Do, h:mm a');
            this.goingGap_.innerHTML = 'lands ' + moment(data.goingWay.arrival).from(moment(data.goingWay.departure));
            this.goingArrive_.innerHTML = '<strong>Lands:</strong> ' + moment(data.goingWay.arrival).format('MMMM Do, h:mm a');

            // Return
            if (data.returnWay) {
                this.returnFlight_.textContent = data.returnWay.flight;
                this.returnConnection_.textContent = data.arrivalCity + ' to ' + data.departureCity;
                this.returnDepart_.innerHTML = '<strong>Flies:</strong> ' + moment(data.returnWay.departure).format('MMMM Do, h:mm a');
                this.returnGap_.innerHTML = 'lands ' + moment(data.goingWay.arrival).from(moment(data.goingWay.departure));
                this.returnArrive_.innerHTML = '<strong>Lands:</strong> ' + moment(data.returnWay.arrival).format('MMMM Do, h:mm a');

                this.el.className = 'flight-result return';
            } else {
                this.el.className = 'flight-result';
            }
        }
    });

    return FlightResultView;

});