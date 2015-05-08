// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        name: '<%= appname %>',
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        config: config,

        shell: {
            run: {
                command: 'cfx run --pkgdir=<%%= config.app %>'
            },
            xpi: {
                command: [
                    'cfx xpi --pkgdir=<%%= config.app %>',
                    'mv <%%= config.name %>.xpi <%%= config.dist %>',
                    'wget --post-file=<%%= config.dist %>/<%%= config.name %>.xpi http://localhost:8888/ || echo>/dev/null'
                ].join('&&')
            }
        },
        watch: {
            xpi: {
                files: ['<%%= config.app %>/**/*.{html,js}'],
                tasks: ['shell:xpi']
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
    grunt.registerTask('default', ['run']);
};
