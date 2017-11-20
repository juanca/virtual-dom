# Virtual DOM

My implementation of a virtual DOM.
Only updates the actual DOM when necessary.

## Why do this?

Just experimenting.
If you are so inclined to check this out: `npm install && npm start` will set you up the package.

## How to use

Given a virtual DOM tree (which can be built or serialized from a DOM fragment):

```
const virtualDomTree = {
  className: 'some-class another-class',
  childNodes: [
    { recursive dom tree structure },
    { recursive dom tree structure },
  ],
  someProperty: 'someValue',
}
```

Apply it to a DOM node with the painter:

```javascript
import virtualToDomPainter from 'virtual-dom/src/virtual-to-dom-painter.js';

// The painter can create a new DOM node
const newDomNode = virtualToDomPainter(virtualDomTree);

// The painter can update an existing DOM node
const newDomNode = virtualToDomPainter(virtualDomTree, someDomNode);
```

The painter will only update DOM as necessary.
It creates missing DOM nodes and updates existing DOM nodes, recursively.

## How does it work?

Virtual tree is compared to the actual DOM.
When nodes are completely different, it creates a new node.
When nodes are slightly different, it updates the existing node.
These algorithms assume that any changes to the DOM always use the Virtual DOM API.

e.g.

```javascript
const vDOM = {
  tag: 'a',
  children: [{
    tag: 'text',
    value: 'Visit Google'
  }],
  href: 'http://www.google.com',
}
```

## What is missing

The virtual DOM algorithm does not efficiently reconcile reordered lists.

The node serializer does not serialize event handlers.
There appears to be missing functionality on identifying event handlers.
Easiest solution would be to check every possible event handler.
However, if the virtual DOM tree has a key-value for an event handler,
it will apply the attribute to the DOM node.

## What can be improved

The virtual DOM algorithm can better utilize `NODE_TYPE` values.
The virtual DOM algorithm should work on an array of virtual DOM trees as well.
