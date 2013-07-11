define("glues/app", [
    "views/app",
], function(appView) {

    return {
        start: function(){
            appView.update(document.body);
        }
    };

});