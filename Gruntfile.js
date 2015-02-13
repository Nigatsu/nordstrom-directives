/*jshint camelcase:false*/
/*global module,require*/

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt)
{
    'use strict';

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-connect-proxy');

    // Configurable paths for the application
    var appConfig = {
        app: './app'
    };

    var jenkinsOptions = {
        reporter: 'checkstyle',
        reporterOutput: 'target/jshint.xml'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.js', '<%= yeoman.app %>/**/*.html', '<%= yeoman.app %>/styles/{,*/}*.css',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                livereload: 35730
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [
                            connect.static(appConfig.app), require('grunt-connect-proxy/lib/utils').proxyRequest
                        ];
                    }
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: true,
                src: ['app/**/*.js', 'tests/**/*.js']
            },
            default: ['<%=jshint.options.src%>'],
            jenkins: {
                options: jenkinsOptions,
                src: ['<%=jshint.options.src%>']
            }
        },

        wiredep: {
            options: {
                cwd: '<%= yeoman.app %>'
            },
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                exclude: [],
                ignorePath: /..\//
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'tests/karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.registerTask('serve', 'Compile then start a connect web server', [
        'configureProxies:server', 'connect:livereload', 'watch'
    ]);

    grunt.registerTask('default', [
        'jshint', 'test', 'build'
    ]);
};
