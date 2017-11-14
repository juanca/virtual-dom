export default function virtualToDomCreator(virtualNode) {
  const domNode = window.document.createElement(virtualNode.tagName);

  Object.keys(virtualNode).forEach(attribute => attribute !== 'tagName' ? domNode[attribute] = virtualNode[attribute] : null);

  return domNode;
}
