import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        let contacts = JSON.parse(data);
        if(contacts.length > 0) {
            contacts.pop();
            console.log(contacts);
        return await fs.writeFile("src/db/db.json", JSON.stringify(contacts, null, 2));
        } 
         console.log('The contact array is empty');
    } catch {
        console.log('error');
    }
};

removeLastContact();
