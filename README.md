# Firefox Extension generator
[![Build Status](https://secure.travis-ci.org/dgil/generator-firefox-extension.png?branch=master)](https://travis-ci.org/dgil/generator-firefox-extension)

[Yeoman](http://yeoman.io) generator for Firefox Extensions lets you quickly set up an extension with the basic file structure and recommended settings.

This saves you time writing boilerplate code so you can start writing up the logic to your project straight away.

## Prerequisites

Firefox Add-on SDK is required to run Firefox Extensions. You can download it here: [Firefox Add-on SDK installation page](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).

If you want to use the `grunt-watch` it's required that you install [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/).


## Getting Started

Install the generator:

```
npm install -g generator-firefox-extension
```

Make a new directory for the extension, and `cd` into it:

```
mkdir my-new-firefox-extension && cd $_
```

Run: `yo firefox-extension`, optionally passing an extension name:

```
yo firefox-extension [extension-name]
```

Need more information about Firefox Extensions? Please visit [Mozilla Developer Network Add-on](https://developer.mozilla.org/en-US/Add-ons/SDK).

  
## Test Firefox Extension

To test the generated extension, run `grunt run`. A new browser with the test extension will start.

## Grunt tasks

### Run

This grunt task runs a new instance of Firefox with the add-on installed. When Firefox launches, in the top-right corner of the browser you'll see an icon with the Firefox logo. If you set the popup option to true and click the icon, you'll see a popup with a `hello world` message.


```
grunt run
```


### Watch

This task will watch any change in the `app` folder (where extension's files are) and reload the extension automatically in your Firefox. 

```
grunt watch
```
**Remember:** You need to install [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/) in order to use this functionality.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## License

[MIT](https://github.com/dgil/generator-firefox-extension/blob/master/LICENSE) © Gil Casadevall
