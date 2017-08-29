# deferred-scripts

[![Build Status](https://travis-ci.org/nickromano/deferred-scripts.svg?branch=master)](https://travis-ci.org/nickromano/deferred-scripts)
[![Coverage Status](https://coveralls.io/repos/github/nickromano/deferred-scripts/badge.svg?branch=master)](https://coveralls.io/github/nickromano/deferred-scripts?branch=master)
[![npm](https://img.shields.io/npm/v/deferred-scripts.svg)](https://www.npmjs.com/package/deferred-scripts)

Defer `<script>` tag loading until needed.

If you have third party scripts you are unable to load until the user has given consent you can use this to defer them.

## Installation

```
npm install deferred-scripts
```

## Example

```javascript
var deferredScripts = new DeferredScripts();

// addScript(sourceURL, onLoadCallback)
deferredScripts.addScript('https://www.google-analytics.com/ga.js', function() {
	// Onload
	console.log('Loaded GA');
});

// addPartial(sourceURL) - requires jquery available
deferredScripts.addPartial('./my-partial.html');

// onLoadCallback is optional
deferredScripts.addScript('https://www.google-analytics.com/ga.js');

// When you're ready to load the scripts
deferredScripts.loadScripts();
```
