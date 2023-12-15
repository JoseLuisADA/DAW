import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { adminCredentials } from '../utils/credencialesToken.js';

export default async function login(username, password) {
  
  if((username === adminCredentials.username) && (await bcrypt.compare(password, adminCredentials.passwordHash))){
    process.env.SECRET_KEY = "admin123";
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '24h' });
    return token;
    
  } else {
    return 'Usuario o contraseña incorrectos';
  }

};
