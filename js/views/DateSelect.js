define("views/DateSelect", function () {

    var create = O.DOM.create;

    var DateSelect = Backbone.View.extend({
        className: 'date-select',

        autocomplete_: null,

        lastValue_: '',

        render: function () {

            var that = this;

            this.$el.append(create('span',{
                className: 'placeholder',
                content: this.options.placeholder
            }));

            this.kalendae_ = new Kalendae({
                attachTo: this.el,
                months: 2,
                mode: 'range',
                direction: 'today-future',
                useYearNav: false,
                selected: [Kalendae.moment()],
                subscribe: {
                    change: function (date, action) {
                        that.trigger('change', this.getSelectedRaw());
                    }
                }
            });

            return this;
        }
    });

    return DateSelect;

});