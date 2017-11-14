import nodeSerializer from './node-serializer.js';
import virtualVsDomShape from './virtual-vs-dom-shape.js';
import virtualToDomUpdater from './virtual-to-dom-updater.js';

console.group('virtual-to-dom-updater');

const rootNode1 = window.document.createElement('a');
rootNode1.href = 'http://www.google.com';
rootNode1.textContent = 'Visit Google!';
const virtualRootNode1 = nodeSerializer(rootNode1);

const rootNode2 = window.document.createElement('a');
rootNode2.href = 'http://www.google.com';
rootNode2.textContent = 'Visit Google!!!';

const diffShape = virtualVsDomShape(virtualRootNode1, rootNode2);
virtualToDomUpdater(diffShape, rootNode2);

console.log('Empty shape:', virtualVsDomShape(virtualRootNode1, rootNode2));

console.groupEnd('virtual-to-dom-updater');
