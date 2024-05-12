import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonTitle, IonContent, IonToolbar, IonHeader, 
        IonButton, IonIcon, IonLabel, IonItem, 
        IonRouterLink} from "@ionic/angular/standalone";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonIcon, 
    IonHeader, 
    IonToolbar, IonContent, IonTitle, IonButton,
    FormsModule,
    RouterModule,
    IonRouterLink
  ]
})
export class ButtonsComponent  implements OnInit {

  constructor() { }
  

  ngOnInit() {}

  hola() {
    console.log('que tal');
    
  }

  ionBlur() {
    console.log('ionBlur');
  }


}
