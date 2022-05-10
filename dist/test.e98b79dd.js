// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.container *,\n.container *::before,\n.container *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* \u5E03\u7F6E\u4E00\u4E0B\u80CC\u666F,\u7ED9\u96F7\u8FBE\u4E00\u4E2A\u5C45\u4E2D*/\n.container {\n    width: 100%;\n    min-height: 50vh;\n    padding: 0px 0;\n    text-align: center;\n    overflow: hidden;\n    background-image: linear-gradient(90deg, rgb(89, 76, 75), rgb(8, 9, 2));\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-flow: row wrap;\n}\n\n/* \u8BBE\u8BA1\u4E00\u4E0B\u8868\u76D8*/\n.container .randar-box {\n    width: 360px;\n    height: 360px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n\n    --green: hsl(134, 34%, 38%);\n    --line-color: #212121;\n}\n\n.container .randar-box .randar-content {\n    /* \u5148\u5B9A\u4F4D\u4E00\u4E0B\u8868\u76D8*/\n    display: flex;\n    width: 320px;\n    height: 320px;\n    border-radius: 50%;\n    border: 15px solid rgb(243, 236, 236);\n    /* \u7EBF\u6027\u91CD\u590D\u6E10\u53D8\u7ED8\u5236\u5730\u56FE*/\n    background: radial-gradient(#afadad 50%, #0a0a0a),\n        repeating-linear-gradient(0deg,\n            var(--line-color) 0px,\n            var(--line-color) 1px,\n            transparent 1px,\n            transparent 25px),\n        repeating-linear-gradient(90deg,\n            var(--line-color) 0px,\n            var(--line-color) 1px,\n            transparent 1px,\n            transparent 25px),\n        linear-gradient(135deg, var(--green), var(--green));\n    /* \u8BBE\u7F6E\u4E00\u4E0B\u80CC\u666F\u6DF7\u5408\u6A21\u5F0F\uFF0C\u5E76\u4E14\u8C03\u6574\u7F51\u683C\u7684\u4F4D\u7F6E\u3002\u8BA9\u7F51\u683C\u548C\u80CC\u666F\u878D\u5408*/\n    background-blend-mode: soft-light;\n    background-position-x: 20px;\n    background-position-y: 7px;\n    will-change: transform;\n}\n\n/* \u7528\u4F2A\u5143\u7D20\u4FEE\u6B63\u4E00\u4E0B\u96F7\u8FBE\u7684\u8FB9\u6846*/\n.container .randar-box .randar-content::before {\n    content: \"\";\n    display: block;\n    width: 296px;\n    height: 296px;\n    position: absolute;\n    border-radius: 50%;\n    border: 1px solid #355555;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: inset 0 0 20px 2px #333,\n        0 0 12px #999;\n\n}\n\n/* \u5B9A\u4F4D\u4E00\u4E0B\u81EA\u5DF1*/\n.container .randar-box .randar-content .randar-pos {\n    width: 0;\n    height: 0;\n    position: absolute;\n    border-width: 12px 10px;\n    border-style: solid;\n    border-color: transparent transparent #ca4828 transparent;\n    left: 50%;\n    top: 50%;\n    margin-left: -10px;\n    margin-top: -18px;\n}\n\n/* \u8BBE\u8BA1\u4E00\u4E0B\u654C\u4EBA*/\n\n.randar-ball {\n    width: 10px;\n    height: 10px;\n    background: #f7f459;\n    position: absolute;\n    border-radius: 50%;\n    box-shadow: 0px 0px 5px #ecea68;\n    animation: flash 3.1s linear infinite;\n}\n\n.randar-ball:nth-of-type(1) {\n    left: 29px;\n    top: 94px;\n}\n\n.randar-ball:nth-of-type(2) {\n    left: 58px;\n    top: 65px;\n}\n\n.randar-ball:nth-of-type(3) {\n    left: 56px;\n    top: 78px;\n}\n\n.randar-ball:nth-of-type(4) {\n    left: 204px;\n    top: 228px;\n}\n\n/* \u52A0\u4E2A\u95EA\u70C1*/\n@keyframes flash {\n\n    0%,\n    50%,\n    to {\n        opacity: 1;\n    }\n\n    25%,\n    75% {\n        opacity: 0.1;\n    }\n}\n/*\u52A0\u4E00\u4E2A\u70AB\u9177\u7684\u626B\u63CF\u52A8\u753B*/\n.randar-content::after {\n    content: \"\";\n    background: linear-gradient(var(--green) 0%, black 60%), linear-gradient(-90deg, black 50%, var(--green) 50%);\n    background-blend-mode: darken;\n    position: absolute;\n    width: 290px;\n    height: 290px;\n    margin-left: -145px;\n    margin-top: -145px;\n    left: 50%;\n    top: 50%;\n    border-radius: 50%;\n    will-change: opacity;\n    opacity: 0.15;\n    z-index: 88;\n    background-blend-mode: darken;\n    animation: scan 5s linear infinite;\n}\n\n@keyframes scan {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = 100;
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var player = {
  id: undefined,
  n: 1,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    "#btnClear": "clear",
    "#btnEnd": "end"
  },
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        // 防御性编程 以防有人胡乱修改原型
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  timer: function timer() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    demo.innerText = _css.default.substring(0, player.n);
    demo2.innerHTML = _css.default.substring(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.timer, time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    time = 500;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  },
  clear: function clear() {
    player.pause();
    player.ui.demo.innerText = "";
    player.ui.demo2.innerHTML = "";
    player.n = 0;
    player.pause();
  },
  end: function end() {
    player.pause();
    player.ui.demo.innerText = _css.default;
    player.ui.demo2.innerHTML = _css.default;
    player.ui.demo2.scrollTop = 9999;
    player.n = _css.default.length;
    player.pause();
  }
};
player.init();
},{"./css":"css.js"}],"../../../node/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "4266" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map