import nodeSerializer from './node-serializer.js';
import virtualToDomPainter from './virtual-to-dom-painter.js';

console.group('virtual-to-dom-painter');

const nodeToCreate = window.document.createElement('a');
nodeToCreate.href = 'http://www.google.com';
nodeToCreate.textContent = 'Visit Google!';
const virtualNodeToCreate = nodeSerializer(nodeToCreate);

console.log('Empty DOM should create a new node', virtualToDomPainter(virtualNodeToCreate, undefined));

console.groupEnd('virtual-to-dom-painter');
