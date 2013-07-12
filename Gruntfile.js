'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        // Task configuration.
        // requirejs: {
        //     compile: {
        //         options: {
        //             name: "main",
        //             baseUrl: "js",
        //             out: "dist/js/main.js",
        //             include: [
        //                 'require.js',
        //                 'modernizr-2.6.2.min.js',
        //                 'underscore.js',
        //             ]
        //         }
        //     }
        // },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['index.html'],
                    dest: 'dist',
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: ['js/**'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    src: ['img/**'],
                    dest: 'dist/'
                }]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/main.min.js'
            },
        },
        nodeunit: {
            files: ['test/**/*_test.js']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                options: {
                    jshintrc: 'js/.jshintrc'
                },
                src: ['js/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['copy']
                // tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                // tasks: ['jshint:test', 'nodeunit']
            },
            css: {
                files: 'css/*.less',
                tasks: ['less']
            },
            img: {
                files: 'img/**',
                tasks: ['copy']
            },
        },
        less: {
            production: {
                options: {
                    paths: ["css"],
                    yuicompress: true
                },
                files: {
                    "dist/css/main.css": "css/main.less"
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task.
    grunt.registerTask('default', ['less', 'copy']);

};