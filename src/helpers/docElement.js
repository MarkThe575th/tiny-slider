import { isClient } from './isClient.js';

export var docElement = isClient ? document.documentElement : null;
