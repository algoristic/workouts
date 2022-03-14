import base64 from 'base-64'
import utf8 from 'utf8'

import { config } from '../assets/app.config.json'

const encode = (string) => {
    if(config.encode) {
        const bytes = utf8.encode(string);
        const encoded = base64.encode(bytes);
        return encoded;
    } else {
        return string;
    }
}

const decode = (string) => {
    if(config.encode) {
        const bytes = base64.decode(string);
        const decoded = utf8.decode(bytes);
        return decoded;
    } else {
        return string;
    }
}

export {
    encode,
    decode
};
