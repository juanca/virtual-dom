const unwritableProperties = ['tagName', 'childNodes'];

export default function virtualToDomUpdater(diffShape, actualNode) {
  Object.keys(diffShape)
    .filter(attribute => !unwritableProperties.includes(attribute))
    .forEach(attribute => actualNode[attribute] = diffShape[attribute]);

  return actualNode;
}
