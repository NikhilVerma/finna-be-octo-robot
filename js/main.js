/**
 * Global object exposing core methods
 * @type {Object}
 */
window.O = {};

require(["core/DOM"], function (_) {

    require(["glues/app"], function (app) {

        app.start();

    });
});

