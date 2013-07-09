define("core/View", ['core/Class'], function(Class) {

    var View = O.View = O.Class.extend({
        parent_: null,

        childViews_: null,

        el: null,

        tagName: 'div',

        className: '',

        init: function() {
            this.childViews_ = [];

            if (this.el === null) {
                this.el = document.createElement(this.tagName);
                this.el.className = this.className;
            }
        },

        draw: function() {
        },

        update: function(data) {},

        insertView: function(view) {
            this.el.appendChild(view.el);
            view.parent_ = this;
            this.childViews_.push(view);

            view.draw();
        }
    });

    return View;

});