import bcrypt from bcrypt;

export function authMiddleware(req, res, next){
    const myPlaintextPassword = "generic";
    const hash = bcrypt.hashSync(myPlaintextPassword, 5);
    console.log(hash);
}