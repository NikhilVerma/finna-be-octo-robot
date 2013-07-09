/**
 * Global object exposing core methods
 * @type {Object}
 */
window.O = {};

require(["core/View", "glues/app"], function(_, app) {

    app.start();

});