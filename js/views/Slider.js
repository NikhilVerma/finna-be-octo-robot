/**
 * A range slider view
 */

define('views/Slider', function() {

    var create = O.DOM.create;

    var supportsTouch = ((window.DocumentTouch && document instanceof window.DocumentTouch) || 'ontouchstart' in window);
    var touchstart = supportsTouch ? 'touchstart' : 'mousedown';
    var touchmove = supportsTouch ? 'touchmove' : 'mousemove';
    var touchend = supportsTouch ? 'touchend' : 'mouseup';

    var events = {};
    events[touchstart] = 'touchStart_';

    var Slider = Backbone.View.extend({
        className: 'slider',

        leftSlider_: null,

        rightSlider_: null,

        currentSlider_: null,

        max_: 0,

        min_: 0,

        offsetWidth_: 0,

        leftSliderPos_: 0,

        rightSliderPos_: 0,

        multiplier_: 0,

        events: events,

        initialize: function () {
            this.max_ = this.options.max;
            this.min_ = this.options.min;
            _.bindAll(this);
        },

        /**
         * Get the nearest slider element based on the location of the user's click
         * @param  {Number} positionX The horizontal distance from the start of the whole slider till the point user clicked
         * @return {HTMLElement} the slider element nearest to that point
         */
        getNearestSlider_: function(positionX) {

            if (Math.abs(positionX - this.leftSliderPos_) < Math.abs(positionX - this.rightSliderPos_)) {
                return this.leftSlider_;
            }

            return this.rightSlider_;

        },

        /**
         * Moves a given slider to a location keeping the minimum gap and bounds in mind
         * @param  {HTMLElement} slider    The slider element to move
         * @param  {Number} position      The horizontal position to which to move the slider to
         */
        moveSlider_: function(slider, position) {
            var data;

            // First check the min's and maxes
            if (slider === this.leftSlider_) {
                position = Math.max(0, Math.min(position, this.rightSliderPos_ - 10));
            } else {
                position = Math.min(this.offsetWidth_, Math.max(position, this.leftSliderPos_ + 10));
            }

            // Change the position
            slider.style.left = position + 'px';

            if (slider === this.leftSlider_) {
                this.leftSliderPos_ = position;
            } else {
                this.rightSliderPos_ = position;
            }

            this.triggerChange_();
        },

        /**
         * Triggers a change event on slider move, it's rate limited to prevent
         * any performance bottlenecks on older devices
         */
        triggerChange_: _.throttle(function() {
            this.trigger('change', this.getData(this.leftSliderPos_, this.rightSliderPos_));
        }, 50),

        /**
         * Moves the slider based on an event
         * @param  {HTMLElement} slider The slider to move
         * @param  {HTMLEvent} e        The event which wants to move the slider
         */
        moveSliderFromEvent_: function(slider, e) {

            var point = supportsTouch ? e.touches[0] : e;

            /**
             * pageX is relative to the window
             */
            var moved = point.pageX - this.el.offsetLeft;

            /**
             * If it's a touch start event then we need to figure out the nearest slider
             * and cache it so that we don't have to keep calculating for every touch move
             */
            if (e.type !== touchmove) {
                slider = this.currentSlider_ = this.getNearestSlider_(moved);
            }

            this.moveSlider_(slider, moved);

        },

        touchStart_: function(e) {

            if (this.offsetWidth_ === 0) {
                // Update the view width
                this.offsetWidth_ = this.el.offsetWidth;
                this.multiplier_ = this.offsetWidth_ / (this.max_ - this.min_);
            }

            this.moveSliderFromEvent_(null, e);

            /**
             * We need to bind events on the whole window for non-touch browsers
             * otherwise dragging the pointer out of the slider will stop the move
             * events from triggering
             */
            window.addEventListener(touchmove, this.touchMove_, false);
            window.addEventListener(touchend, this.touchEnd_, false);

        },

        touchMove_: function(e) {
            this.moveSliderFromEvent_(this.currentSlider_, e);
        },

        touchEnd_: function() {

            this.currentSlider_ = null;

            window.removeEventListener(touchmove, this.touchMove_);
            window.removeEventListener(touchend, this.touchEnd_);

        },

        render: function() {
            this.$el.append(
                this.leftSlider_ = create('span'),
                this.rightSlider_ = create('span')
            );

            return this;
        },

        /**
         * Get the the actual data based on the pixel position of the sliders
         * @param  {Number} leftPosition  The position of the left slider
         * @param  {Number} rightPosition The position of the right slider
         * @return {Object}               The actual from and to values of the slider
         */
        getData: function(leftPosition, rightPosition) {
            if (arguments.length === 0) {
                leftPosition = this.leftSliderPos_;
                rightPosition = this.rightSliderPos_;
            }

            return {
                from: Math.round(this.min_ + leftPosition / this.multiplier_),
                to: Math.round(this.min_ + rightPosition / this.multiplier_)
            };
        }
    });

    return Slider;

});