
// Set the require.js configuration for your application.
require.config({

    // Initialize the application with the main application file and the JamJS
    // generated configuration file.
    deps: ["kalendae", "moment", "backbone", "main"],

    "packages": [{
        "name": "backbone",
        "location": "/js/libs",
        "main": "backbone.js"
    }, {
        "name": "Zepto",
        "location": "/js/libs",
        "main": "zepto.js"
    }, {
        "name": "lodash",
        "location": "/js/libs",
        "main": "lodash.js"
    }, {
        "name": "moment",
        "location": "/js/libs",
        "main": "moment.js"
    }, {
        "name": "kalendae",
        "location": "/js/libs",
        "main": "kalendae.standalone.min.js"
    }],

    "shim": {
        "backbone": {
            "deps": [
                "lodash",
                "Zepto"
            ],
            "exports": "Backbone"
        }
    }

});