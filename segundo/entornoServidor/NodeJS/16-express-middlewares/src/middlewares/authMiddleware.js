export default function authMiddleware(req, res, next) {
  const { password } = req.headers;
  if (password === 'patata') {
    next();
  } else {
    res.status(401).json({ error: 'Acceso restringido, por favor incluya la palabra secreta en el parámetro "password" en la cabecera de la petición' });
  }
}
