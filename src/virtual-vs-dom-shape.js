export default function virtualVsDomShape(virtualNode, actualNode) {
  if (actualNode === undefined) return undefined;

  const diffShape = Object.keys(virtualNode).reduce((shape, attribute) => {
    if (virtualNode[attribute] !== actualNode[attribute]) {
      shape[attribute] = virtualNode[attribute];
    }

    return shape;
  }, {});

  if (virtualNode.className !== actualNode.className) {
    diffShape.className = virtualNode.className;
  }

  return diffShape;
}
