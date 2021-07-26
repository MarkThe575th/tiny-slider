import { isClient } from './isClient.js';

export var classListSupport = isClient ? 'classList' in document.createElement('_') : false;
