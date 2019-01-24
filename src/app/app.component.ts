import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private sqlite: SQLite,
    private dbService : DatabaseService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.createDB();
    });
  }

  createDB(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' 
    }).then((db: SQLiteObject) => {
      console.log('Executed sql');
      this.dbService.setDatabase(db);
      return this.dbService.createTables();
    }).then(() =>{
      this.splashScreen.hide();
    }).catch(error =>{
      console.error(error);
    });
  }
}
