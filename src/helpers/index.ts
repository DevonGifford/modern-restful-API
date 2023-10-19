import crypto from 'crypto';

const SECRET = 'DEVON-REST-API'; //.env obviously 

export const authentication = (salt: string, password: string): string => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}

export const random = () => crypto.randomBytes(128).toString('base64');