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
            xpi: {
                command: [
                    'cfx xpi --pkgdir=app',
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
        }
    });

    grunt.registerTask('default', ['watch']);
};
