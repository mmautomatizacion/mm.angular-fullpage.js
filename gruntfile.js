'use strict';

module.exports = function(grunt) {
    //grunt wrapper function 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		uglify: {
		    js: {
		        src: ['./src/mm.angular-fullpage.js'],
		        dest: './mm.angular-fullpage.min.js'
		    }
		},
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    './mm.angular-fullpage.min.css': './src/mm.angular-fullpage.css'
                }
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //register grunt default task
    grunt.registerTask('default', ['uglify', 'cssmin']);
}