import servicioAuth from '../services/auth-services.js';

export default async function login(req, res, next) {
  
  const { username, password } = req.body;
  console.log(username, password);
  try{
    const mensaje = await servicioAuth(username, password);
    res.send(mensaje);
  } catch(error){
    error.status = 400;
    next(error);
  }

};
