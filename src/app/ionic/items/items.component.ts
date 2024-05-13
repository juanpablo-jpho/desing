import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonTitle, IonHeader, IonContent, IonToolbar, 
  IonLabel, IonItem, IonIcon, IonList, IonButton, 
  IonButtons, IonListHeader, IonAvatar, IonNote, IonChip, 
  IonRouterLink} from "@ionic/angular/standalone";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  standalone: true,
  imports: [IonChip, IonNote, IonAvatar, IonListHeader, IonButtons, IonButton, 
    IonIcon, IonItem, IonLabel, IonToolbar, 
    IonContent, IonHeader, IonTitle, 
    IonList,
    RouterModule,
    IonRouterLink
  ]
})
export class ItemsComponent  implements OnInit {

  opciones: Option[] = [
    {
      name: 'Content',
      path: '/content',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum sequi porro fugit impedit aliquam molestiae dolore temporibus illo! Ratione, eos fuga harum quasi fugit eveniet consectetur corrupti nemo ad?',
      icon: 'albums',
      color: 'primary' 
    },
    {
      name: 'Buttons',
      path: '/buttons',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum sequi porro fugit impedit aliquam molestiae dolore temporibus illo! Ratione, eos fuga harum quasi fugit eveniet consectetur corrupti nemo ad?',
      icon: 'apps',
      color: 'secondary' 
    },
    {
      name: 'Home',
      path: '/home',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum sequi porro fugit impedit aliquam molestiae dolore temporibus illo! Ratione, eos fuga harum quasi fugit eveniet consectetur corrupti nemo ad?',
      icon: 'home',
      color: 'success' 
    }
  ];

  constructor() { }

  ngOnInit() {}

}

interface Option {
  name: string;
  description: string;
  path: string;
  icon: string;
  color: string;
}
