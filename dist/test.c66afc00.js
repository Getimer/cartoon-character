// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.bc *{margin: 0;padding: 0;box-sizing: border-box;}\n.bc ::after{box-sizing: border-box;}\n.bc ::before{box-sizing: border-box;}\n.bc{\n    position: relative;\n}\n.ahead{\n    width: 320px;\n    height: 300px;\n    border: 2px solid rgba(14, 14, 14,0.5);\n    position: relative;\n    left: 50%;\n    margin-left: -160px;\n    border-radius: 50%;\n    background: #07BBEE;\n}\n.face{\n    width: 270px;\n    height: 200px;   \n    border-radius:  60% 60% 60% 60%;\n    position: absolute;\n    left: 25px;\n    top: 80px;\n    background: white;\n}\n.eye{\n    width: 76px;\n    height: 86px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 40px;\n    margin-left: -38px;\n    background: white;    \n}\n.eye.left{\n    transform: translateX(-38px);\n    border-radius: 50%;\n}\n.eye.right{\n    transform: translateX(38px);\n    border-radius: 50%;   \n}\n.tears{\n    width: 14px;\n    height: 14px;\n    background: black;\n    border-radius: 50%;\n    position: relative;\n}\n.tears.left{  \n    left: 50%;\n    top: 50%;\n}\n.tears.right{\n    left: 33%;\n    top: 50%;\n}\n@keyframes move{\n    0%{\n        margin: 0 10px -10px 0;\n    }\n    33%{\n        margin: 3px 10px -5px 0;\n    }\n    66%{\n        margin: 0 5px -10px 10px;\n    }\n    100%{\n        margin: 10px 10px -1px 0;\n    }\n}\n.bread{   \n    position: absolute;\n    top:40%;\n    width: 220px;\n    height: 50px;\n    display: block;\n    left: 50px;\n}\n.bread1{\n    width: 60px;\n    height: 2px;\n    background: black;\n    transform: rotate(0.05turn);\n}\n.bread2{\n    width: 60px;\n    height: 2px;\n    background: black;\n    transform: rotate(0.45turn);\n}\n.breadGroup1{\n    width: 220px;\n    height: 40px; \n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n.bread3{\n    width: 59px;\n    height: 2px;\n    background: black;\n}\n.bread4{\n    width: 59px;\n    height: 2px;\n    background: black;\n}\n.breadGroup2{\n    width: 220px;\n    height: 40px;    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.bread5{\n    width: 60px;\n    height: 2px;\n    background: black;\n    transform: rotate(0.45turn);\n}\n.bread6{\n    width: 60px;\n    height: 2px;\n    background: black;\n    transform: rotate(0.05turn);\n}\n.breadGroup3{\n    width: 220px;\n    height: 40px;  \n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n.nose{\n    width: 36px;\n    height: 36px;\n    background: rgb(201,51,0);\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 35%;\n    margin-left: -18px;\n    border-radius: 45% 45% 45% 45%;   \n}\n.mouthLine{\n    width: 3px;\n    height: 100px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    top: 47%;\n    margin-left: -1.5px;\n}\n.mouth{\n    width: 200px;\n    height: 180px;\n    border: 3px solid  black;\n    border-top:3px solid   rgba(200,200,200,0);\n    border-left: 3px solid  rgba(200,200,200,0);\n    border-right: 3px solid  rgba(200,200,200,0);\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    margin-left: -100px;\n    border-radius: 0% 0% 50% 50%;\n}\n.bodys{\n    width: 234px;\n    height: 196px;\n    position: absolute;\n    left: 50%;\n    top: 85%;\n}\n.necktie{\n    width: 234px;\n    height: 24px;\n    border: 2px solid black;\n    background: rgb(201,51,0);\n    border-radius: 10px;\n    -moz-border-radius: 10px;\n    -webkit-border-radius: 10px;\n    -o-border-radius: 10px;\n    position: relative;\n    margin-left: -117px;\n    left: 50%;\n    top:-198px\n}\n.smallBell{\n    width: 44px;\n    height: 44px;\n    border: 2px solid black;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top:-18px;\n    margin-left: -22px;\n    background: yellow;\n}\n.line1{\n    width: 36px;\n    height: 2px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    top: 22%;\n    margin-left: -18px;\n}\n.line2{\n    width: 40px;\n    height: 2px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    top: 34%;\n    margin-left: -20px;\n}\n.line3{\n    width: 3px;\n    height: 15px;\n    background: black;\n    position: absolute;\n    left: 50%;\n    top: 65%;\n    margin-left: -1.5px;\n}\n.radius{\n    width: 12px;\n    height: 12px;\n    background: black;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top: 45%;\n    margin-left: -6px;\n}\n.abody{\n    width: 224px;\n    height: 177px;\n    position: relative;\n    top: 24px;\n    margin-left: -112px;\n    background: #07BBEE;\n}\n.bodyLine{\n    width: 224px;\n    height: 133px;\n    border: 2px solid black;\n    position: absolute;\n    left: 50%;\n    top: 108%;\n    margin-left: -112px;\n    border-bottom: none;\n    border-top: none;\n}\n.belly{\n    width: 174px;\n    height: 174px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    top: -27px;\n    margin-left: -87px;\n    border-radius: 50%;\n    background: white;\n    border-top: 2px solid   rgba(200,200,200,0);\n}\n.pocket{\n    width: 134px;\n    height: 75px;\n    border: 2px solid black;\n    position: relative;\n    left: 50%;\n    top: -83%;\n    margin-left: -67px;\n    border-radius:0 0 100px 100px;\n}\n.crutch{\n    width: 20px;\n    height: 14px;\n    position: relative;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -10px;\n    top:-62%;\n    background: white;\n    border-radius:10px 10px 0 0;\n    border-bottom: 2px solid   rgba(200,200,200,0);\n}\n.ahand{\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 1%;\n    top:7%\n}\n.ahand.left{\n    transform: translateX(-187px);\n}\n.ahand.right{\n    transform: translateX(96px);\n}\n.arm.left{\n    width: 100px;\n    height: 50px;\n    border: 1px solid black;\n    border-left:none ;\n    position: relative;\n    transform: rotate(0.40turn);\n    top: 25%;\n    background: #07BBEE;\n}\n.arm.right{\n    width: 100px;\n    height: 50px;\n    border: 1px solid black;\n    border-left:none ;\n    position: relative;\n    transform: rotate(0.10turn);\n    top: 24%;\n    left: -12%;\n    background: #07BBEE;\n}\n.plam.right{\n    width: 64px;\n    height: 64px;\n    border: 2px solid black;\n    position: relative;\n    border-radius: 50%;\n    left: 31px;\n    top: -15px;\n    background: white;\n}\n.plam.left{\n    width: 64px;\n    height: 64px;\n    border: 2px solid black;\n    position: relative;\n    border-radius: 50%;\n    left: -7px;\n    top: -15px;\n    background: white;\n}\n.afoot{\n    width: 128px;\n    height: 34px;\n    border-radius: 70px 50px 50px 30px;\n    position: absolute;\n    border: 2px solid black;\n    left: 50%;\n    top: 149%;\n    margin-left: -64px;\n    background: white;\n}\n.afoot.left{\n    transform: translateX(-68px);  \n}\n.afoot.right{\n    transform: translateX(68px);\n}\n.bc .ahead .eye .tears{\n    animation: move 1s infinite linear;\n}\n   ";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _css2.default;
var pause = '■';
var play = '►';
var n = 1;
var m = 50;
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var btnPlay = document.querySelector('#btnPlay');
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
var run = function run() {
    n = n + 1;
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
};
var id = setInterval(run, m);
var repeat = function repeat() {
    if (btnPlay.innerText === pause) {
        btnPlay.onclick = function () {
            window.clearInterval(id);
            btnPlay.innerHTML = play;
            if (btnPlay.innerText === play) {
                btnPlay.onclick = function () {
                    id = setInterval(function () {
                        run();
                        btnPlay.innerHTML = pause;
                        repeat();
                    }, m);
                };
            }
        };
    }
};
repeat();
document.querySelector('#btnSlow').onclick = function () {
    clearInterval(id);
    id = setInterval(run, change('-'));
};
document.querySelector('#btnQuick').onclick = function () {
    clearInterval(id);
    id = setInterval(run, change('+'));
};
var change = function change(string) {
    m = string === '+' ? m - 10 : m + 10;
    m = m >= 100 ? 100 : m <= 0 ? 0 : m;
    return m;
};
},{"./css":"css.js"}],"C:\\Users\\cheng\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '64494' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\cheng\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.c66afc00.map