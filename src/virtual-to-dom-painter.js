import virtualToDomCreator from './virtual-to-dom-creator.js';
import virtualToDomUpdater from './virtual-to-dom-updater.js';

/*
 * Use it or lose it approach
 * For the root virtual node, use or lose its respective DOM node.
 * Use-it would update the existing node.
 * Lose-it would create a new node.
 * For each virtual child node, recurse with the painter.
 */

export default function virtualToDomPainter(virtualNode, domNode) {
  return virtualToDomCreator(virtualNode);
}
