var assert = require('assert')

var MockBrowser = require('mock-browser').mocks.MockBrowser;
global.document = new MockBrowser().getDocument();

var DeferredScripts = require('./index.js')

describe('deferred-scripts', function() {
  it('should allow scripts with onload callback', function() {
    var deferredScripts = new DeferredScripts();

    deferredScripts.addScript('https://www.google-analytics.com/ga.js', function() {
      // On load
    })
  })

  it('should allow scripts without onload callback', function() {
    var deferredScripts = new DeferredScripts();

    deferredScripts.addScript('https://www.google-analytics.com/ga.js')
  })

  it('shouldnt add scripts to document until called', function() {
    var deferredScripts = new DeferredScripts();

    deferredScripts.addScript('https://www.google-analytics.com/ga.js')

    var head = global.document.getElementsByTagName('head')[0];
    assert.equal(head.innerHTML, '')

    deferredScripts.loadScripts()

    head = global.document.getElementsByTagName('head')[0];
    assert.equal(head.innerHTML, '<script type="text/javascript" src="https://www.google-analytics.com/ga.js"></script>')
  })

  it('should clear scripts after loading', function() {
    var deferredScripts = new DeferredScripts();

    deferredScripts.addScript('https://www.google-analytics.com/ga.js', function() {
    })

    assert.equal(deferredScripts.deferredScripts.length, 1)

    deferredScripts.loadScripts()

    assert.equal(deferredScripts.deferredScripts.length, 0)
  })
})
