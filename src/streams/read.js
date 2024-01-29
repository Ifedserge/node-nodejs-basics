import fs from 'fs';
const read = async () => {
    // Write your code here 
    const readStream = fs.createReadStream('./files/fileToRead.txt', 'utf8');
    readStream.pipe(process.stdout);
};

await read();