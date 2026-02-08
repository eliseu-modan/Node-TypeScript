const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf-8');

const words = content.split(' ');
const reactWordCount = words.filter(word => word.toLowerCase() === 'react').length;

console.log(`The file contains ${words.length} words.`);
console.log('Palavra "React" encontrada:', reactWordCount);
