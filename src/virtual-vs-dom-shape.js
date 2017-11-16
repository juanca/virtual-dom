export default function virtualVsDomShape(virtualNode, actualNode) {
  if (actualNode === undefined) return undefined;

  return Object.keys(virtualNode).reduce((shape, attribute) => {
    if (virtualNode[attribute] !== actualNode[attribute]) {
      shape[attribute] = virtualNode[attribute];
    }

    return shape;
  }, {});
}
