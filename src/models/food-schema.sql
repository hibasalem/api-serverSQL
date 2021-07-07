DROP TABLE IF EXISTS food;

CREATE TABLE food(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  ingridents varchar(255),
  caluries  smallint
);