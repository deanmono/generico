'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8008,
                    useAvailablePort: true,
                    base: 'app',
                    open: true,
                    keepalive: true
                }
            }
        },
        stylus: {
            compile: {
                files: {
                    'app/dist/styles.css': ['app/main.styl', 'app/components/**/*.styl']
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            build: {
                files: {
                    'app/dist/scripts.min.js': [
                        //'node_modules/angular/angular.min.js',
                        'app/app.js',
                        'app/components/*/*.js',
                        'app/components/**/**/*.js'
                    ]
                }
            }
        },
        watch: {
            stylus: {
                files: ['app/*/*.styl'],
                tasks: ['stylus:compile'],
                options : { livereload: true }
            },
            js: {
                files: ['app/app.js', 'app/components/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['stylus', 'uglify']);
    grunt.registerTask('serve', ['connect']);

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
};