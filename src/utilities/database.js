import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places_database.db');

export function init(){
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS places_database (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          location TEXT NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      )
    });
  });

  return promise;
}

export function insertPlace(place){
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places_database (name, imageUri, location) values (?, ?, ?)`,
        [place.name, place.imageURL, place.location],
        (_, result) => {
          resolve(result)
        },
        (_, error) => {
          reject(error)
        }
      )
    })
  });

  return promise;
}
