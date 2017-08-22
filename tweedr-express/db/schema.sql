DROP DATABASE IF EXISTS tweedr_app;
CREATE DATABASE tweedr_app;

\c tweedr_app;

CREATE TABLE IF NOT EXISTS posts(
	id SERIAL PRIMARY KEY,
	post TEXT
);

INSERT INTO posts(post) VALUES ('Hello World');