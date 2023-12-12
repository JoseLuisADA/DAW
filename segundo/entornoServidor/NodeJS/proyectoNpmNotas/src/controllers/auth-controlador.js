import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { adminCredentials } from '../utils/usuario.js';

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === adminCredentials.username) {
    if (await bcrypt.compare(password, adminCredentials.passwordHash)) {
      const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '24h' });
      res.send(token);
    } else {
      res.status(401).send('Contraseña incorrecta');
    }
  } else {
    res.status(404).send('Usuario no encontrado');
  }
};
