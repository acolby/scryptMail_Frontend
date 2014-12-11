'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			public: {
				files: {
					'public/styles/main.css': 'public/styles/main.scss'
				}
			}
		},
		watch: {
			styles: {
				files: ['public/styles/main.scss'],
				tasks: ['sass']
			},
			jade: {
	          files: ['public/views/jade/*.jade', 'public/views/directives/**/*.jade'],
	          tasks: ['jade']
	        }
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};