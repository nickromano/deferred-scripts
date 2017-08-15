function DeferredScripts() {
  this.deferredScripts = []
}

DeferredScripts.prototype.addScript = function(sourceURL, onLoadCallback) {
  this.deferredScripts.push({sourceURL: sourceURL, onLoadCallback: onLoadCallback})
}

DeferredScripts.prototype.loadScripts = function() {
  for (var i = this.deferredScripts.length - 1; i >= 0; i--) {
    var jsConfig = this.deferredScripts[i];

    // Add script tag to body
    // From https://stackoverflow.com/a/8578840/817886
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
      if (typeof jsConfig.onLoadCallback !== "undefined") {
         jsConfig.onLoadCallback();
      }
    };
    script.src = jsConfig.sourceURL;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
