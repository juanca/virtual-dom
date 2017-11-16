import nodeSerializer from './node-serializer.js';
import virtualToDomPainter from './virtual-to-dom-painter.js';

console.group('virtual-to-dom-painter');

const nodeToCreate = window.document.createElement('a');
nodeToCreate.href = 'http://www.google.com';
nodeToCreate.textContent = 'Visit Google!';
const virtualNodeToCreate = nodeSerializer(nodeToCreate);

console.log('Empty DOM should create a new node', virtualToDomPainter(virtualNodeToCreate, undefined));

const expectedNodeToUpdate = window.document.createElement('a');
expectedNodeToUpdate.href = 'http://www.google.com';
expectedNodeToUpdate.textContent = 'Visit Google!!!';
const virtualNodeToUpdate = nodeSerializer(expectedNodeToUpdate);

const actualNodeToUpdate = window.document.createElement('a');
actualNodeToUpdate.href = 'http://www.google.com';
actualNodeToUpdate.textContent = 'Visit Google!';

const updatedNode = virtualToDomPainter(virtualNodeToUpdate, actualNodeToUpdate)
console.log('DOM node should update a new node', updatedNode, updatedNode === actualNodeToUpdate);

console.groupEnd('virtual-to-dom-painter');
