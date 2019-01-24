import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db: SQLiteObject = null;

  constructor() { }

  setDatabase(db: SQLiteObject){
    console.log(db);
    if(this.db === null){
      this.db = db;
    }
  }

  createTables(){
    let query : string = "CREATE TABLE IF NOT EXISTS list(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), date DATE, status INTEGER); CREATE TABLE IF NOT EXISTS list_items(id INTEGER PRIMARY KEY AUTOINCREMENT, list_id INTEGER FOREIGN KEY(list_id) REFERENCES list(id) ON UPDATE CASCADE, name VARCHAR(100), description TEXT, price FLOAT, image TEXT)";
    return this.db.executeSql(query, []);
  }

  getAllList(){

  }

  getAllItemList(){

  }

  createList(){
    let query = "INSERT INTO list(name, date, status) VALUES('Xbox', now(), '0')";
    return this.db.executeSql(query);
  }

  createItemList(){

  }

  updateList(){

  }

  updateItemList(){

  }


}
