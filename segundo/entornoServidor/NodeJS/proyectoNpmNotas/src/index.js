import app from './app.js';
import 'dotenv/config';

export default app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});