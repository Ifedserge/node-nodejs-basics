import {promises as fs} from 'fs';

const list = async () => {
    // Write your code here 
    const dirPath = './files';
    try{
        await fs.access(dirPath);
        const files = await fs.readdir(dirPath);
        console.log(files);
    }catch (err){
        if(err.code === 'ENOENT'){
            throw new Error('FS ERROR');
        }
        throw err;
    }
};

await list();