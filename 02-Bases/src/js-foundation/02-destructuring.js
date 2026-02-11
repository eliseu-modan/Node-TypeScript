// console.log(process.env);

const { npm_execpath, npm_lifecycle_script } = process.env;
// console.log({npm_execpath, npm_lifecycle_script});

const characteres = ["Goku", "Vegeta", "teste", "Trunks"];
const [, , , trunks] = characteres;
console.log(trunks);
