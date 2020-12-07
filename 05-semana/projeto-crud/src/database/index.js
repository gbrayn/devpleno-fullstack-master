import mysql from 'mysql';

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '159$',
  database: 'cadastro'
});

export default connection;
