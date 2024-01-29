import {promises as fs} from 'fs';

const remove = async () => {
    // Write your code here 
    const filePath = './files/fileToRemove.txt';

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    }catch (err){
        if(err.code ==='ENOENT'){
            throw new Error('FS ERROR')
        }
        throw err;
    }
};

await remove();