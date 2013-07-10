define("views/Header", function() {

    var Header = O.View.extend({
        tagName: 'header',

        className: 'header',

        title: false,

        init: function(props) {
            if (props.title) {
                this.title = props.title;
            }

            this._super.apply(this, arguments);
        },

        draw: function(){
            if (this.title) {
                this.el.appendChild(O.DOM.create('h1', {
                    text: this.title
                }));
            }
        }
    });

    return Header;

});