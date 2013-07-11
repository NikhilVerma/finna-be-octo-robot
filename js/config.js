
// Set the require.js configuration for your application.
require.config({

    // Initialize the application with the main application file and the JamJS
    // generated configuration file.
    deps: ["backbone", "main"],

    // paths: {
    //     // Use the underscore build of Lo-Dash to minimize incompatibilities.
    //     "lodash": "../vendor/jam/lodash/dist/lodash.underscore"

    //     // Put additional paths here.
    // },

    // map: {
    //     // Ensure Lo-Dash is used instead of underscore.
    //     "*": {
    //         "underscore": "lodash"
    //     }
    // },

    "packages": [{
        "name": "backbone",
        "location": "/js/",
        "main": "backbone.js"
    }, {
        "name": "Zepto",
        "location": "/js/",
        "main": "zepto.js"
    }, {
        "name": "lodash",
        "location": "/js/",
        "main": "lodash.js"
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