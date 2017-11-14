# Virtual DOM

My implementation of a virtual DOM.
Only updates the actual DOM when necessary.

## Why do this?

Just experimenting.
If you are so inclined to check this out: `npm install && npm start` will set you up the package.

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

## Performance considerations

- Reordering lists will waste resources.
- Which DOM changes should only be updated vs recreating a new node?
