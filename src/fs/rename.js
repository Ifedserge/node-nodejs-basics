import {promises as fs} from 'fs';
import path from 'path';

const rename = async () => {
    // Write your code here 
    const oldPath = './files/wrongFilename.txt';
    const newPath = './files/properFilename.md';

    try {
        await fs.access(oldPath);
        await fs.access(newPath).then(() => {throw new Error('FS ERORR');}).catch((err) => { if(err.code !== 'ENOENT') throw err;});
        await fs.rename(oldPath, newPath);
    } catch (err){
        throw err;
    }

};

await rename();