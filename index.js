function DeferredScripts() {
  this.deferredScripts = []
}

DeferredScripts.prototype.addScript = function(sourceURL, onLoadCallback) {
  this.deferredScripts.push({sourceURL: sourceURL, onLoadCallback: onLoadCallback})
}

DeferredScripts.prototype.addPartial = function(sourceURL) {
  this.deferredScripts.push({sourceURL: sourceURL, partial: true})
}

DeferredScripts.prototype.loadScripts = function() {
  for (var i = this.deferredScripts.length - 1; i >= 0; i--) {
    var jsConfig = this.deferredScripts[i];

    if (jsConfig.partial) {
      // Append html from partial to body
      // get partialHTML from 
      $.get(jsConfig.sourceURL, function(data) {
        $('body').append(data);
      });
    } else {
      // Add script tag to body
      // From https://stackoverflow.com/a/8578840/817886
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.onload = jsConfig.onLoadCallback;
      script.src = jsConfig.sourceURL;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }

  this.deferredScripts = []
}

if (typeof module !== "undefined" && module && module.exports) {
  module.exports = DeferredScripts;
}
