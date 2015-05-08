# Firefox Extension generator
[![Build Status](https://secure.travis-ci.org/dgil/generator-firefox-extension.png?branch=master)](https://travis-ci.org/dgil/generator-firefox-extension)

[Yeoman](http://yeoman.io) generator for Firefox Extensions lets you quickly set up an extension with the basic file structure and recommended settings.

This saves you time writing boilerplate code so you can start writing up the logic for your project straight away.

## Prerequisites

The Firefox Add-on SDK is required to run this Firefox Extension generator. How to install it is described here: [Firefox Add-on SDK installation page](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).

If you want to use `grunt-watch` it's required that you install the [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/).


## Getting Started

Install the generator:

```
npm install -g generator-firefox-extension
```

Make a new directory for the extension and `cd` into it:

```
mkdir my-new-firefox-extension && cd $_
```

Run: `yo firefox-extension`, optionally passing an extension name:

```
yo firefox-extension [extension-name]
```

Need more information about Firefox Extensions? Please visit [Mozilla Developer Network Add-on](https://developer.mozilla.org/en-US/Add-ons/SDK).

## Test your extension

To test the generated extension, run `grunt run`. A new browser with the test extension will start.

## Build your extension

To build the generated extension, run `cfx xpi --pkgdir=app`. This command will create an `xpi` file which you can distribute or upload to Mozilla's official Add-ons repository (AMO).

More info on submitting your extension to AMO can be found here: [Submitting an add-on to AMO](https://developer.mozilla.org/en-US/Add-ons/Submitting_an_add-on_to_AMO).
 
## Grunt tasks

### Run

This grunt task runs a new instance of Firefox with the add-on installed. When Firefox launches, in the top-right corner of the browser you'll see an icon with the Firefox logo. If you set the popup option to `true` and click the icon, you'll see a popup with a `hello world` message.


```
grunt run
```


### Watch

This task will watch for any changes in the `app` folder (where the extension's files are) and reload the extension automatically in Firefox. 

```
grunt watch
```

### Wiredep

This task finds your Bower components and injects them directly into the HTML file you specify.

```
grunt wiredep
```

**Remember:** You need to install [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/) in order to use this functionality.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## License

[MIT](https://github.com/dgil/generator-firefox-extension/blob/master/LICENSE) © Gil Casadevall
