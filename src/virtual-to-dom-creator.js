import virtualToDomUpdater from './virtual-to-dom-updater.js';

export default function virtualToDomCreator(virtualNode) {
  const domNode = window.document.createElement(virtualNode.tagName);

  return virtualToDomUpdater(virtualNode, domNode);
}
