import nodeSerializer from './node-serializer.js';
import virtualVsDomShape from './virtual-vs-dom-shape.js';

console.group('virtual-vs-dom-shape');

const rootNode1 = window.document.createElement('a');
rootNode1.href = 'http://www.google.com';
rootNode1.textContent = 'Visit Google!';
const virtualRootNode1 = nodeSerializer(rootNode1);

console.log('Empty shape:', virtualVsDomShape(virtualRootNode1, rootNode1));

const rootNode2 = window.document.createElement('a');
rootNode2.href = 'http://www.google.com';
rootNode2.textContent = 'Visit Google!!!';
console.log('Different text content:', virtualVsDomShape(virtualRootNode1, rootNode2));

console.groupEnd('virtual-vs-dom-shape');
