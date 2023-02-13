import * as SQLite from 'expo-sqlite';
import PlaceObject from './place';

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

export function fetchPlaces(){
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places_database`,
        [],
        (_, result) => {
          const places = [];

          result.rows._array.forEach((place) => {
            places.push(new PlaceObject(place.id, place.name, place.imageUri, place.location));
          })

          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      )
    })
  })

  return promise;
}

export function fetchPlace(id){
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places_database WHERE id = ?`,
        [id],
        (_, result) => {
          const place = new PlaceObject(result.rows._array[0].id, result.rows._array[0].name, result.rows._array[0].imageUri, result.rows._array[0].location)
          resolve(place)
        },
        (_, error) => {
          reject(error);
        }
      )
    })
  })

  return promise;
}
