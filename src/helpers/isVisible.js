import { isClient } from './isClient.js';

export function isVisible(el) {
  return isClient ? window.getComputedStyle(el).display !== 'none' : false;
}
