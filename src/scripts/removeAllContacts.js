import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data); 
        contacts = [];    
        return await fs.writeFile("src/db/db.json", JSON.stringify(contacts, null, 2));
    } catch (error) {
        console.log(error);
    }
};

removeAllContacts();
