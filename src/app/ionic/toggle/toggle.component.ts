import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonListHeader, IonLabel, IonText,
  IonToggle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, 
    IonListHeader, IonLabel,
    IonText, 
    IonToggle,
    FormsModule
  ]
})
export class ToggleComponent  implements OnInit {

  enable: boolean;

  constructor() { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.enable = true;
  }
 
  enableNotifications(ev: any) {
    // console.log('enableNotifications -> ', ev);
    // if (ev.detail.checked == true) {
    //   console.log('enableNotifications');
    // }

    if (this.enable) {
      console.log('enableNotifications con ngmodel');
    } else {
      console.log('disableNotifications con ngmodel');
    }
    
  }

}
