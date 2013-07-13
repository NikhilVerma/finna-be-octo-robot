define("views/PriceSlider", [
    'views/Slider'
], function (SliderView) {

    var create = O.DOM.create;

    var PriceSlider = Backbone.View.extend({
        className: 'price-slider',

        autocomplete_: null,

        lastValue_: '',

        initialize: function () {
            this.slider_ = new SliderView({
                max: this.options.max,
                min: this.options.min
            });

            this.listenTo(this.slider_, 'change', this.handleSliderChange_);
        },

        updatePlaceholder_: function(min, max){
            this.placeholder_.textContent = this.options.placeholder + this.options.currency + (min || this.options.min) + '-' + (max || this.options.max);
        },

        render: function () {

            this.$el.append(
                this.placeholder_ = create('span', {
                    className: 'placeholder'
                }),

                this.slider_.render().el
            );

            this.updatePlaceholder_();

            return this;
        },

        handleSliderChange_: function (data) {
            this.updatePlaceholder_(data.from, data.to);
            this.trigger('change', data);
        }
    });

    return PriceSlider;

});