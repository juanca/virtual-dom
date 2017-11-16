function childrenMap(children, func) {
  const mappedChildren = [];

  for(let i = 0; i < children.length; i += 1) {
    mappedChildren.push(func(children[i]));
  }

  return mappedChildren;
}

export default function nodeSerializer(node) {
  let customAttributes = {
    className: node.className,
  };

  for(let i = 0; i < node.attributes.length; i += 1) {
    const attribute = node.attributes.item(i);
    customAttributes[attribute.name] = node[attribute.name];
  }

  return {
    childNodes: childrenMap(node.children, nodeSerializer),
    tagName: node.tagName,
    textContent: node.textContent,
    ...customAttributes,
  };
}
