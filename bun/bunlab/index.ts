console.log("Hello via Bun!");
const path = "./foo.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.split('\n');
console.log("got", lines);
