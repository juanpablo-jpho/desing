import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonItem, IonCardSubtitle, 
  IonCard, IonCardTitle, 
  IonCardHeader,
  IonCardContent, IonButton, 
  IonList,
  IonThumbnail,
  IonLabel,
  IonRouterLink} from "@ionic/angular/standalone";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardSubtitle, IonItem, 
    IonButtons, IonContent, IonTitle, IonToolbar, IonHeader, 
    IonMenuButton, IonCard, IonCardHeader, IonCardTitle,
    IonCardContent,
    IonList, IonThumbnail, IonLabel,
    RouterModule,
    IonRouterLink
  ]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
