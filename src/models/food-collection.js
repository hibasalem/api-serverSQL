'use strict';

const pool = require('./pool');

class FoodCollection {
  create(obj) {
    const sql =
      'INSERT INTO food(name,ingridents,caluries) VALUES($1,$2,$3) RETURNING *;';
    const save = [obj.name, obj.ingridents, obj.caluries];
    return pool.query(sql, save);
  }

  read(id) {
    if (id) {
      return pool.query('SELECT * FROM food WHERE id=$1;', [id]);
    } else {
      return pool.query('SELECT * FROM food;');
    }
  }

  update(id, obj) {
    const sql =
      'UPDATE food SET name=$1,ingridents=$2,caluries=$3 WHERE id=$4 RETURNING *;';
    const save = [obj.name, obj.ingridents, obj.caluries, id];
    return pool.query(sql, save);
  }

  delete(id) {
    return pool.query('DELETE FROM food WHERE id=$1 RETURNING *;', [id]);
  }
}

module.exports = FoodCollection;
