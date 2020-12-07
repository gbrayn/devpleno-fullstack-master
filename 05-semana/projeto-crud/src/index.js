import app from './app';
import connection from './database';

const port = process.env.PORT || 3333;

connection.connect(err => {
  if (err) {
    console.log(`❌ ${err}`);
  } else {
    app.listen(port, err => {
      err
        ? console.log('❌ Não foi possível iniciar o servidor\n', err)
        : console.log(`🚀 Servidor rodando: http://localhost:${port}/`);
      console.log('🚀 Conectado ao banco de dados');
    });
  }
});
