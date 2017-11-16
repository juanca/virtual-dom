export default function nodeSerializer(node) {
  let customAttributes = {
    className: node.className,
  };

  for(let i = 0; i < node.attributes.length; i += 1) {
    const attribute = node.attributes.item(i);
    customAttributes[attribute.name] = node[attribute.name];
  }

  return {
    tagName: node.tagName,
    textContent: node.textContent,
    ...customAttributes,
  };
}
