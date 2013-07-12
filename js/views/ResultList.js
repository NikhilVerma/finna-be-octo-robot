define("views/ResultList", [
    'views/FlightResult'
], function (FlightResultView) {

    var create = O.DOM.create;

    var ResultListView = Backbone.View.extend({
        className: 'result-list',

        viewCache_: [],

        render: function (list) {
            this.$el.empty();

            _.forEach(list, function (item, key) {
                this.viewCache_[key].update(item);
                this.$el.append(this.viewCache_[key].el);
            }, this);
        },

        update: function (list) {
            var i, len;

            // If we are falling short of views then create them
            if (this.viewCache_.length < list.length) {
                for (i = 0, len = list.length - this.viewCache_.length; i < len; i++) {
                    this.viewCache_.push(new FlightResultView().render());
                }
            }

            this.render(list);
        }
    });

    return ResultListView;

});