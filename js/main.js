/**
 * Global object exposing core methods
 * @type {Object}
 */
window.O = {};

require(["core/DOM"], function (_) {

    require(["views/app"], function (appView) {

        appView.update(document.body);

    });
});

