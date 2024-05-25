import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabButton, IonTabBar, IonIcon
  ]
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
