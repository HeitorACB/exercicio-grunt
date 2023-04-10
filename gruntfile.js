module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css' : 'main.less'
                }
            }
        },
        uglify: {
            build: {
                src: 'main.js',
                dest: 'main.min.js'
            }
        },
        replace:{
            dev:{
                options:{
                    patterns: [
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: 'main.min.js'
                        }
                    ]
                }
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['less', 'uglify', 'replace']);
}
