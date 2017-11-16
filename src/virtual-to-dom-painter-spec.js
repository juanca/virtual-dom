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


const expectedParentNode = window.document.createElement('div');
expectedParentNode.className = 'hello';

const childNodeToCreate = window.document.createElement('a');
childNodeToCreate.href = 'http://www.google.com';
childNodeToCreate.textContent = 'Visit Google!';

expectedParentNode.appendChild(childNodeToCreate);
const virtualParent = nodeSerializer(expectedParentNode);

const parentNode = window.document.createElement('div');
const updatedParentNode = virtualToDomPainter(virtualParent, parentNode);

console.log('DOM node should update parent node', updatedParentNode, updatedParentNode === parentNode, parentNode.classList.contains('hello'));
console.log('DOM node should create child node', parentNode.children[0]);


console.groupEnd('virtual-to-dom-painter');
