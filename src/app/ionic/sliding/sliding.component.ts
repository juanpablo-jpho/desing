import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonContent, 
  IonHeader, IonMenuButton, IonTitle, 
  IonToolbar, IonItemSliding, 
  IonList,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonLabel,
  IonIcon, IonListHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.component.html',
  styleUrls: ['./sliding.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonItemSliding, 
    IonButtons, IonButton, 
    IonHeader, IonToolbar, IonTitle,
    IonContent, IonMenuButton,
    IonList,
    IonItemOptions, IonItemOption,
    IonItem, IonLabel,
    IonIcon
  ]
})
export class SlidingComponent  implements OnInit {

  @ViewChild('sliding1') slidingEnd: IonItemSliding

  constructor() { }

  ngOnInit() {}

  do() {
    console.log('hacer algo');
    
  }

  open() {
    this.slidingEnd.open('start')
  }

}

// 
