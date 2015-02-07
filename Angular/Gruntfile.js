module.exports = function(grunt) {
	grunt.initConfig({
        // Get configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
					style: 'expanded'
    	        },
    	        files: {
    	            "public/css/style.css": "public/css/sass/style.scss" // <target>.css : <source>.less
    	        }
    	    },
            dist: {
                options: {
					style: 'compressed'
    	        },
    	        files: {
    	            "public/css/style.css": "public/css/sass/style.scss" // <target>.css : <source>.less
    	        }
    	    },
    	},
	    // running `grunt watch` will watch for changes
	    watch: {
	        files: "public/css/sass/*.scss",
	        tasks: ["sass:dev"]
	    }
	});
    // load grunt tasks
	// grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    require('load-grunt-tasks')(grunt);
	// set default of "grunt" command to "watch"
	grunt.registerTask('default', ['watch']);
};
