import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonMenuButton, 
  IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonCard, 
  IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: true,
  imports: [IonCard, IonCol, 
    IonHeader, IonToolbar, IonTitle, IonButtons,
    IonMenuButton, IonContent,
    IonGrid, IonRow, IonCol, IonInput
  ]
})
export class GridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
