import { Component } from '@angular/core';

import { CarPage } from '../car/car';
import { MapPage } from '../map/map';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CarPage;
  tab2Root = MapPage;
  tab3Root = HistoryPage;

  constructor() {
  }
}
