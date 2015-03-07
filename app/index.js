'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
        this.author = this.user.git.name();
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the extraordinary ' + chalk.red('FirefoxExtension') + ' generator!'
        ));

        var prompts = [
            {
                name: 'name',
                message: 'What would you like to call this extension?',
                default: (this.appname) ? this.appname : 'myFirefoxExtension'
            },
            {
                name: 'description',
                message: 'How would you like to describe this extension?',
                default: 'My Firefox Extension'
            }
        ];

        this.prompt(prompts, function (answers) {
            this.title = answers.name.replace(/\"/g, '\\"');
            this.appname = _.slugify(this.title);
            this.description = answers.description.replace(/\"/g, '\\"');

            done();
        }.bind(this));
    },

    writing: {
        firefoxApp: function () {
            this.directory(
                this.templatePath('app'),
                this.destinationPath('app')
            );
        },

        gruntfile: function () {
            this.template('Gruntfile.js');
        },

        git: function () {
            this.copy('gitignore', '.gitignore');
        },

        bower: function () {
            this.mkdir('app/bower_components');
            this.template('_bower.json', 'bower.json');
            this.fs.copy(
                this.templatePath('bowerrc'),
                this.destinationPath('.bowerrc')
            );
        },

        jshint: function () {
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
        },

        editorConfig: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
        },

        packageJSON: function () {
            this.template('_package.json', 'package.json');
        }
    },

    install: function () {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});
