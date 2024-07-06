import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);  
        const count = contacts.length;
        console.log(`"db.json" have ${count} contacts`);
        return count;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
