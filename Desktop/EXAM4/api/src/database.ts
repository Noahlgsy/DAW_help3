import Sqlite3 from "better-sqlite3";

const db = Sqlite3("../database/app.sqlite"); //better-sqlite3 le crée automatiquement. meme s'ils n'existent pas

db.pragma("foreign_keys = ON"); 

db.exec(`
  CREATE TABLE IF NOT EXISTS Film(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL, 
    id_real INTEGER, 
    FOREIGN KEY (id_real) REFERENCES Real(id)
    ); 

    CREATE TABLE IF NOT EXISTS Acteur(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL); 

    CREATE TABLE IF NOT EXISTS Real(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL); 

    CREATE TABLE IF NOT EXISTS Jouer(
    id_film INTEGER,
    id_acteur INTEGER,
    FOREIGN KEY (id_film) REFERENCES Film(id),
    FOREIGN KEY (id_acteur) REFERENCES Acteur(id)
    ); 

  `); 

  export default db; 