import { isClient } from './isClient.js';

var win = isClient ? window : null;

export var raf = !win ? (cb) => {return cb();} : win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };
