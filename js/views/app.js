define("views/app", [
    "views/Header"
], function(HeaderView) {

    var View = O.View.extend({
        className : 'app',

        update: function(body) {
            this.draw();
            body.appendChild(this.el);

            this.insertView(new HeaderView({
                title: 'Octoflights !'
            }));
        }
    });

    return new View();

});