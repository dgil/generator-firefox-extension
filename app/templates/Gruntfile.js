// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    config = Object.assign(config, grunt.file.readJSON(config.app + '/package.json'));

    grunt.initConfig({
        config: config,

        shell: {
            run: {
                command: 'jpm run --addon-dir <%%= config.app %>'
            },
            post: {
                command: 'jpm post --post-url http://localhost:8888/ --addon-dir <%%= config.app %>'
      	    },
            build: {
                command: [
                    'jpm xpi --addon-dir <%%= config.app %>',
                    'mv <%%= config.app %>/<%%= config.id %>-<%%= config.version %>.xpi <%%= config.dist %>'
                ].join('&&')
            }
        },
        watch: {
            xpi: {
                files: ['<%%= config.app %>/**/*', '!<%%= config.app %>/**/*.xpi'],
                tasks: ['shell:post']
            }
        },
        wiredep: {
            task: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'app/data/{,*}/*.html'
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });

    grunt.registerTask('run', ['shell:run']);
    grunt.registerTask('build', ['shell:build']);
    grunt.registerTask('default', ['run']);
};
