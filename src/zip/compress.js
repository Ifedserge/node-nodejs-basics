import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    // Write your code here 
    const source = fs.createReadStream('./files/fileToCompress.txt');
    const destination = fs.createWriteStream('./archive.gz');
    const gzip = zlib.createGzip();
};

await compress();