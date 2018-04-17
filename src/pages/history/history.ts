import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  constructor(private sqlite: SQLite, public navCtrl: NavController) {

    this.sqlite.create({
      name: 'mycardata.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('create table places(lat VARCHAR(32), long VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  }
}




