'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');
var _ = require('underscore');

describe('Firefox Extension generator', function () {
    var runGen,
        prompts = {},
        options = {
            'skip-install': true
        };

    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            runGen = helpers
                .run(path.join(__dirname, '../app'))
                .withGenerators([
                    [helpers.createDummyGenerator(), 'firefox-extension:app'],
                ]);
            done();
        });
    });

    it('creates project files', function (done) {
        var expected = [
            'bower.json',
            '.bowerrc',
            '.gitignore',
            'package.json',
            'Gruntfile.js',
            '.editorconfig',
            '.jshintrc'
        ];

        runGen
            .withOptions(options)
            .withPrompt(
                _.extend(prompts, {
                    'name': 'temp',
                    'description': 'description'
                })
            ).on('end', function () {
                assert.file(expected);
                assert.fileContent([
                    ['bower.json', /"name": "temp"/],
                    ['package.json', /"name": "temp"/],
                ]);
                done();
            });
    });

    it('creates extension files', function (done) {
        var expected = [
            'app/package.json',
            'app/data/icon-16.png',
            'app/data/icon-32.png',
            'app/data/icon-64.png',
            'app/data/popup.html',
            'app/lib/main.js'
        ];

        runGen
            .withOptions(options)
            .on('end', function () {
                assert.file(expected);
                done();
            });
    });

    it('creates expected extension package.json properties', function (done) {
        runGen
            .withOptions(options)
            .withPrompt(
                _.extend(prompts, {
                    'name': 'temp',
                    'description': 'description'
                })
            ).on('end', function () {
                assert.fileContent([
                    ['app/package.json', /"name": "temp"/],
                    ['app/package.json', /"description": "description"/],
                ]);
                done();
            });
    });

});
