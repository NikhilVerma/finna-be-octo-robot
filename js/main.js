/**
 * Global object exposing core methods
 * @type {Object}
 */
window.O = {};

require(["glues/app", "core/DOM", "core/View", "underscore", "modernizr"], function(app) {

    app.start();

});