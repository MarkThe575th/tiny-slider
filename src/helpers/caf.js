import { isClient } from './isClient.js';

var win = isClient ? window : null;

export var caf = !win ? (_) => {} : win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };
