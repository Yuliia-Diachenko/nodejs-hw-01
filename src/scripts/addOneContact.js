import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from "node:fs/promises";

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data); 
        console.log(contacts);
        contacts.push( createFakeContact());
        await fs.writeFile("src/db/db.json", JSON.stringify(contacts, null, 2));  
        console.log(`Added one contact`);
    } 
    catch (error) {
        console.log(error);
    }
};

addOneContact();
