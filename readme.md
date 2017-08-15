# deferred-scripts

Defer `<script>` tag loading until needed.

If you have third party scripts you are unable to load until the user has given consent you can use this to defer them.

## Installation

```
npm install deferred-scripts
```

## Example

```javascript
var deferredScripts = new DeferredScripts();

deferredScripts.addScript('https://www.google-analytics.com/ga.js', function() {
	// Onload
	console.log('Loaded GA')
})

// When you're ready to load the scripts
deferredScripts.loadScripts();
```
