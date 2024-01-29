import {promises as fs} from 'fs';
const read = async () => {
    // Write your code here 
    const filePath = './files/fileToRead.txt';

    try {
        await fs.access(filePath);
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch(err){
        if(err.code = 'ENOENT') {
            throw new Error('FS ERROR');
        }
        throw err;
    }
};

await read();