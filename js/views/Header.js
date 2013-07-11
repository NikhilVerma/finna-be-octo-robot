define("views/Header", function() {

    var Header = Backbone.View.extend({
        tagName: 'header',

        title: false,

        initialize: function(props) {
            if (props.title) {
                this.title = props.title;
            }
        },

        render: function(){
            if (this.title) {
                this.el.appendChild(O.DOM.create('h1', {
                    text: this.title
                }));
            }

            return this;
        }
    });

    return Header;

});