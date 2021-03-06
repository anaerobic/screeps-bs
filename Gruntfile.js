module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        screeps: {
            options: {
                email: '<email>',
                password: '<password>'
            },
            dist: {
                src: ['**/do-over/*.js']
            }
        },
        watch: {
            scripts: {
                files: ['**/do-over/*.js'],
                tasks: ['screeps'],
                options: {
                    spawn: false,
                    //interrupt: true
                },
            },
        }
    });
}