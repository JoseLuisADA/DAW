import express from 'express';
import path from 'path';
import indexRouter from './routes/index.js';

const app = express();

app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
