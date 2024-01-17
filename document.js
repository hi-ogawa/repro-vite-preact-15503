// All the world is a browser

if (typeof document === 'undefined') {
  global.jsdom = new (require('jsdom').JSDOM)({ url: 'https://substack.com' });
  global.document = jsdom.window.document;
  global.DOMParser = jsdom.window.DOMParser;
  global.Image = jsdom.window.Image;
  global.navigator = jsdom.window.navigator;
  global.history = jsdom.window.history;

  global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
  };
  global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}
