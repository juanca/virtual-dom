import nodeSerializer from './node-serializer.js';
import virtualVsDomShape from './virtual-vs-dom-shape.js';
import virtualToDomCreator from './virtual-to-dom-creator.js';

console.group('virtual-to-dom-creator');

const rootNode1 = window.document.createElement('a');
rootNode1.href = 'http://www.google.com';
rootNode1.textContent = 'Visit Google!';
const virtualRootNode1 = nodeSerializer(rootNode1);

const rootNode2 = virtualToDomCreator(virtualRootNode1);
console.log('Empty shape:', virtualVsDomShape(virtualRootNode1, rootNode2));

console.groupEnd('virtual-to-dom-creator');
