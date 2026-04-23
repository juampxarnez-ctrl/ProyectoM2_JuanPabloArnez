INSERT INTO authors (name, email, bio)
VALUES
('Juan Pablo', 'juan@mail.com', 'Autor de prueba'),
('Ana', 'ana@mail.com', 'Autora de prueba');

INSERT INTO posts (title, content, author_id, published)
VALUES
('Primer post', 'Contenido del primer post', 1, true),
('Segundo post', 'Contenido del segundo post', 2, false);