import { Component, OnInit } from '@angular/core';
import { IonTitle, IonHeader, IonFooter, 
          IonToolbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, 
    IonFooter,
    IonToolbar, IonContent
  ]
})
export class ContentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
