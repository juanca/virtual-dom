export default function virtualToDomUpdater(diffShape, actualNode) {
  Object.keys(diffShape).forEach(attribute => actualNode[attribute] = diffShape[attribute]);

  return actualNode;
}
