import virtualToDomCreator from './virtual-to-dom-creator.js';
import virtualToDomUpdater from './virtual-to-dom-updater.js';
import virtualVsDomShape from './virtual-vs-dom-shape.js';

/*
 * Use it or lose it approach
 * For the root virtual node, use or lose its respective DOM node.
 * Use-it would update the existing node.
 * Lose-it would create a new node.
 * For each virtual child node, recurse with the painter.
 */

export default function virtualToDomPainter(virtualNode, domNode) {
  const domDiff = virtualVsDomShape(virtualNode, domNode);

  const rootNode = (domDiff === undefined || domDiff.tagName) ?
    virtualToDomCreator(virtualNode) :
    virtualToDomUpdater(virtualNode, domNode);

  virtualNode.childNodes.forEach((virtualChild, i) => {
    const childNode = virtualToDomPainter(virtualChild, domNode.childNodes[i]);

    if (childNode !== domNode.childNodes[i]) {
      domNode.replaceChild(childNode, domNode.childNodes[i]);
    }
  });

  return rootNode;
}
