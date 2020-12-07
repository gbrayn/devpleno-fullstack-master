import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

app.get('/', (req, res) => {
  res.render('home');
});

export default app;
