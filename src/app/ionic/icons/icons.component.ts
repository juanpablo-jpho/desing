import { Component, OnInit } from '@angular/core';
import { IonTitle, IonContent, IonHeader, IonToolbar, IonIcon} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import  * as all  from 'ionicons/icons';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  standalone: true,
  imports: [IonIcon, IonToolbar, IonHeader, IonContent, IonTitle, 
    
  ]
})
export class IconsComponent  implements OnInit {

  constructor() { 
    // addIcons(all);
  }

  ngOnInit() {}

}
