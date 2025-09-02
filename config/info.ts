import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config({ path: fileURLToPath(new URL('.env', import.meta.url)) });

export const info = {
    url: process.env.SERVICENOW_URL || '',
    user: process.env.SERVICENOW_USER || '',
    password: process.env.SERVICENOW_PASS || ''
};

// console.log('Info carregada:', info);
