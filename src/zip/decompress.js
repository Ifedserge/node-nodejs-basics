import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    // Write your code here 

    const source = fs.createReadStream('./archive.gz');
    const destination = fs.createWriteStream('./fileToCompress.txt');
    const gunzip = zlib.createGunzip();

    source.pipe(gunzip).pipe(destination)
};

await decompress();