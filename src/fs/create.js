import {promises as fs} from 'fs'

const create = async () => {
    try {
        await fs.writeFile('./files/fresh.txt', 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error('Error! such a file already exists');
        }
        throw err;
    }
};

await create();