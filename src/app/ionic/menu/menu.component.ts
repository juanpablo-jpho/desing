import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonHeader, IonMenu, IonTitle, 
  IonToolbar, IonButtons, IonLabel, IonItem, IonToggle, 
  IonMenuToggle, IonButton, IonIcon, IonMenuButton, 
  MenuController, IonSplitPane } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonSplitPane, IonIcon, IonToggle, IonItem, IonLabel, IonButtons, 
    IonTitle, IonContent, 
    IonToolbar, IonHeader, IonMenu, 
    IonMenuToggle, IonButton,
    IonMenuButton
  ]
})
export class MenuComponent  implements OnInit {

  @ViewChild('menu1') menuStart: IonMenu 



  constructor(private menuController: MenuController) { }

  ngOnInit() {
    // this.disable('1');
    setTimeout(() => {
      // this.menuStart.open();
      
    }, 1000);
  }

  openMenu(id: string) {
    // this.menuController.open(id)
    this.menuStart.open();
  }

  disable(id: string) {
    this.menuController.enable(false, id)
  }

  ionDidOpen() {
    console.log('ionDidOpen');
  }

}


