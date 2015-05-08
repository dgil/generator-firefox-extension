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
            },
            {
                name: 'popup',
                message: 'Would you like to see a popup when toolbar\'s button is clicked?',
                type: 'confirm',
                default: true
            },
            {
                name: 'contentscript',
                message: 'Would you like to use a content script?',
                type: 'confirm',
                default: true
            }
        ];

        this.prompt(prompts, function (answers) {
            this.title = answers.name.replace(/\"/g, '\\"');
            this.appname = _.slugify(this.title);
            this.description = answers.description.replace(/\"/g, '\\"');
            this.popup = answers.popup;
            this.contentscript = answers.contentscript;

            done();
        }.bind(this));
    },

    writing: {
        firefoxApp: function () {
            this.directory(
                this.templatePath('app'),
                this.destinationPath('app')
            );
            this.mkdir('dist');

            if (!this.contentscript) {
                this.fs.delete(this.destinationPath('app/data/contentscript.js'));
                this.fs.delete(this.destinationPath('app/data/contentstyle.css'));
            }

            if (!this.popup) {
                this.fs.delete(this.destinationPath('app/data/popup.html'));
            }
        },

        gruntfile: function () {
            this.template('Gruntfile.js');
        },

        git: function () {
            this.copy('gitignore', '.gitignore');
        },

        bower: function () {
            this.mkdir('app/data/bower_components');
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
