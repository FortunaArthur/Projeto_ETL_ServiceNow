import { info } from './config/info.ts';
import axios from 'axios';

async function getServiceNowData() {
    try {
        const response = await axios.get(info.url, {
        headers: { 'Accept': 'application/json' },
        auth: { username: info.user, password: info.password } // Basic Auth simplificado
        });

        console.log(response.data.result); // registros do Incident
    } catch (error: any) {
        console.error(error.response?.data || error.message);
    }
}

getServiceNowData();
