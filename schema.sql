DROP DATABASE IF EXISTS rpmodule;
CREATE DATABASE rpmodule;
USE rpmodule;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  details_id int,
  description text,
  title text,
  cost decimal(10, 2),
  image_url text
);

CREATE TABLE related (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  parent_item_id int,
  item_id int
);

CREATE TABLE details (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  overview text,
  specifications text,
  coverage text
);

CREATE TABLE ratings (
  id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  item_id int,
  score int
);

ALTER TABLE items ADD FOREIGN KEY fk_details (details_id) REFERENCES details (id);