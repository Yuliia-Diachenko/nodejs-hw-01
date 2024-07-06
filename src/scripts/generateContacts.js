import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);  
                
        console.log(contacts);
        for (let i = 0; i < number; i++) {
          contacts.push( createFakeContact());            
        }
        console.log(`Added ${number} contacts`);
        return await fs.writeFile("src/db/db.json", JSON.stringify(contacts, null, 2));     
        
        }
    catch(error) {
        console.log(error);
        }    
};

generateContacts(5);
