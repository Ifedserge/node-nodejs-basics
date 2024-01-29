import {promises as fs} from 'fs';
import path from 'path';

const copy = async () => {
    // Write your code here 
    const srcDir = './files';
    const copyDir = './files_copy';
    try{
        const srcExists = await fs.access(srcDir).then(() => true).catch(() => false);
        const copyExists = await fs.access(copyDir).then(() => true).catch(() => false);

        await fs.mkdir(copyDir);

        const files = await fs.readdir(srcDir);
        for(const file of files){
            const srcPath = path.join(srcDir, file);
            const copyPath = path.join(copyDir, file);
            await fs.copyFile(srcPath, copyPath);
        }
    }catch (err){
        throw err;
    }
};

await copy();
