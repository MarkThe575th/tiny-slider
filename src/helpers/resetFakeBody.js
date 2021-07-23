import { docElement } from './docElement.js';
import { isClient } from './isClient.js';

export function resetFakeBody (body, docOverflow) {
  if (isClient && body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    docElement.offsetHeight;
  }
}
