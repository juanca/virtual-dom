import nodeSerializer from './node-serializer.js';

console.group('node-serializer-spec');

const rootNode1 = window.document.createElement('a');
rootNode1.href = 'http://www.google.com';
rootNode1.textContent = 'Visit Google!';

const serializedRootNode1 = nodeSerializer(rootNode1);
console.log('serialized node:', serializedRootNode1);
console.log('TAG NAME?', serializedRootNode1.tagName == 'A');
console.log('HREF?', serializedRootNode1.href == 'http://www.google.com/');
console.log('TEXT CONTENT?', serializedRootNode1.textContent == 'Visit Google!');

console.groupEnd('node-serializer-spec');
