define("views/app", [
    "views/Header",
    "views/ResultList",
    "views/FlightSearch",
    "models/FlightSearch"
], function (HeaderView, ResultListView, SearchView, SearchModel) {

    var View = Backbone.View.extend({
        className: 'app',

        flightView_: null,

        update: function (body) {

            // Header view
            this.$el.append(new HeaderView({
                title: 'Let\'s Travel!'
            }).render().el);

            // Flight search view
            this.searchView_ = new SearchView({
                model: new SearchModel()
            }).render();
            this.$el.append(this.searchView_.el);
            this.listenTo(this.searchView_, 'didSearch', this.renderResults_);

            // Flight results view
            this.resultsView_ = new ResultListView();
            this.$el.append(this.resultsView_.el);

            body.appendChild(this.el);
        },

        renderResults_: function(results) {
            this.resultsView_.update(results);
        }
    });

    return new View();

});