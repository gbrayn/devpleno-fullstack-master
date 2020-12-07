import connection from '../database';

const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query('select * from pessoas;', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const destroy = id => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from pessoas where id=${id} limit 1`, err => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const create = data => {
  return new Promise((resolve, reject) => {
    const { nome, nascimento, cargo } = data;
    connection.query(
      `insert into pessoas (nome, nascimento, cargo) values ('${nome}', '${nascimento}', '${cargo}')`,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

const findById = id => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from pessoas where id=${id}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
};

const update = (id, data) => {
  return new Promise((resolve, reject) => {
    const { nome, nascimento, cargo } = data;
    connection.query(
      `update pessoas set nome='${nome}', nascimento='${nascimento}', cargo='${cargo}' where id=${id}`,
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

export default { findAll, destroy, create, findById, update };
