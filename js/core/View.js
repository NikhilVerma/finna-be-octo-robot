define("core/View", ['core/Class', 'core/Events', 'core/DOM'], function(Class, Events, DOM) {

    var View = O.View = O.Class.extend({
        parent_: null,

        childViews_: null,

        el: null,

        tagName: 'div',

        className: '',

        init: function() {
            this.childViews_ = [];

            if (this.el === null) {
                this.el = DOM.create(this.tagName,{
                    className: this.className
                });
            }
        },

        draw: function() {},

        update: function() {},

        insertView: function(view) {
            this.el.appendChild(view.el);
            view.parent_ = this;
            this.childViews_.push(view);

            view.draw();
        }
    });

    _.extend(View.prototype, Events);

    return View;

});