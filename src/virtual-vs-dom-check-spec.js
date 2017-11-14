import nodeSerializer from './node-serializer.js';
import virtualVsDomCheck from './virtual-vs-dom-check.js';

const rootNode1 = window.document.createElement('a');
rootNode1.href = 'http://www.google.com';
rootNode1.textContent = 'Visit Google!';
const virtualRootNode1 = nodeSerializer(rootNode1);

console.log('rootNode1 check:', virtualVsDomCheck(virtualRootNode1, rootNode1) === true);

const rootNode2 = window.document.createElement('a');
rootNode2.href = 'http://www.google.com';
rootNode2.textContent = 'Visit Google!!!';
console.log('rootNode1 check:', virtualVsDomCheck(virtualRootNode1, rootNode2) === false);
