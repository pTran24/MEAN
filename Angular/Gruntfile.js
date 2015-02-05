module.exports = function(grunt) {
    grunt.initConfig({
        // Get configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    paths: ["public/css"],
                    yuicompress: true
                },
            files: {
                "public/css/style.css": "public/css/style.less"
            }
        },
        min: {
            dist: {
                src: './public/less/*.less',
                dest: './public/css/*.css'
            }
        }
    },
    // running `grunt watch` will watch for changes
    watch: {
        files: "./public/css/*.less",
        tasks: ["less"]
    }
});
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
