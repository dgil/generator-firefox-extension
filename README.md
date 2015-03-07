# generator-firefox-extension 
[![Build Status](https://secure.travis-ci.org/dgil/generator-firefox-extension.png?branch=master)](https://travis-ci.org/dgil/generator-firefox-extension)

## Prerequisites

Firefox Add-on SDK is required to run Firefox Extensions. You can download it here: [Firefox Add-on SDK installation page](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation).

If you want to use the *grunt-watch* it's required that you install [Extension Auto-Installer](https://addons.mozilla.org/en-US/firefox/addon/autoinstaller/).


## Getting Started

* Install the generator: `npm install -g generator-firefox-extension`
* Make a new directory for the extension, and `cd` into it: `mkdir my-new-firefox-extension && cd $_`
* Run: `yo firefox-extension`, optionally passing an extension name: `yo firefox-extension [extension-name]`

Need more information about Firefox Extensions? Please visit [Mozilla Developer Network Add-on](https://developer.mozilla.org/en-US/Add-ons/SDK).

  
## Test Firefox Extension

To test the generated extension, run `cfx run --pkgdir=app`. A new browser with the test extension will start.

## Grunt tasks

### Watch

```
grunt watch
```

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## License

[MIT](https://github.com/dgil/generator-firefox-extension/blob/master/LICENSE) © Gil Casadevall
