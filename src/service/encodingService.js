import base64 from 'base-64'
import utf8 from 'utf8'

const encode = (string) => {
    const bytes = utf8.encode(string);
    const encoded = base64.encode(bytes);
    return encoded;
}

const decode = (string) => {
    const bytes = base64.decode(string);
    const decoded = utf8.decode(bytes);
    return decoded;
}

export {
    encode,
    decode
};
