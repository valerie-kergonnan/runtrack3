console.log('bonjour node.js');

const version = process.version;
console.log(`Node.js version: ${version}`);

// infos sur node.js

const versions = process.versions;

console.log('Node:', versions);
console.log(`plateforme: ${ process.platform}`);