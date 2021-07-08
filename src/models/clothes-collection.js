'use strict';

const pool = require('./pool');

class ClothesCollection {
  create(obj) {
    console.log(obj);
    const sql =
      'INSERT INTO clothes(type,session,price,avilable) VALUES($1,$2,$3,$4) RETURNING *;';
    const save = [obj.type, obj.session, obj.price, obj.avilable];
    return pool.query(sql, save);
  }

  read(id) {
    if (id) {
      return pool.query('SELECT * FROM clothes WHERE id=$1;', [id]);
    } else {
      return pool.query('SELECT * FROM clothes;');
    }
  }

  update(id, obj) {
    const sql =
      'UPDATE clothes SET type=$1,session=$2,price=$3,avilable=$4 WHERE id=$5 RETURNING *;';
    const save = [obj.type, obj.session, obj.price, obj.avilable, id];
    return pool.query(sql, save);
  }

  delete(id) {
    return pool.query('DELETE FROM clothes WHERE id=$1 RETURNING *;', [id]);
  }
}

module.exports = ClothesCollection;
