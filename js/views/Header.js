define("views/Header", function() {

    var Header = O.View.extend({
        tagName: 'header',

        className: 'header',

        title: false,

        init: function(props) {
            if (props.title) {
                this.title = props.title;
            }

            this._super.init.apply(this, arguments);
        },

        draw: function(){
            if (this.title) {
                var a = document.createElement('h1');
                a.textContent = this.title;

                this.el.appendChild(a);
            }
        }
    });

    return Header;

});