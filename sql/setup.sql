-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists dinos;

CREATE table dinos (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  period VARCHAR NOT NULL
);

INSERT INTO dinos (name, period) VALUES 
('Iguanodon', 'Cretaceous'),
('Tyrannosaurus', 'Cretaceous'),
('Apatosaurus', 'Jurassic'),
('Dilophosaurus', 'Jurassic'),
('Ankylosuaurus', 'Cretaceous'),
('Stegosaurus', 'Jurassic'),
('Triceratops', 'Cretaceous'),
('Pteronodon', 'Cretaceous'),
('Dimetrodon', 'Triassic'),
('Diplodocus', 'Jurassic'),
('Parasaurolophus', 'Cretaceous'),
('Spinosaurus', 'Crecaceous'),
('Velociraptor', 'Cretaceous'),
('Spike the Puppy Dragon', 'Quaternary');