import servicioAuth from '../services/auth-services.js';

export default async function login(req, res, next) {
  const { username, password } = req.body;
  try{
    const token = await servicioAuth(username, password);

    res.send({ token });
  } catch(error){
    error.status = 400;
    next(error);
  }
};
