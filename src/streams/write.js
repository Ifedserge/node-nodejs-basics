import fs from 'fs';
const write = async () => {
    // Write your code here 
    const writeStream = fs.createWriteStream('./files/fileToWrite.txt');
    process.stdin.pipe(writeStream);
};

await write();