import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, logoIonic } from 'ionicons/icons';
import * as all  from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class IoniconsService {
 
  constructor() { }

  loadListIcons() {
    addIcons({ home, logoIonic });
  }

  loadAllIcons() {
    addIcons(all);
  }

}
