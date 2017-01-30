'use strict';

module.exports = function(grunt) {
    //grunt wrapper function 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [{expand: true, flatten: true, src: ['src/**'], dest: 'dist/', filter: 'isFile'}]
            }
        },
		uglify: {
		    js: {
		        src: ['./src/mm.angular-fullpage.js'],
		        dest: './dist/mm.angular-fullpage.min.js'
		    }
		},
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    './dist/mm.angular-fullpage.min.css': './src/mm.angular-fullpage.css'
                }
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //register grunt default task
    grunt.registerTask('default', ['copy', 'uglify', 'cssmin']);
}