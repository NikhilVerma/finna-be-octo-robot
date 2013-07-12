
// Set the require.js configuration for your application.
require.config({

    // Initialize the application with the main application file and the JamJS
    // generated configuration file.
    deps: ["kalendae", "moment", "backbone", "main"],

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