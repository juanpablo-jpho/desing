import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonMenuButton, 
  IonProgressBar, IonTitle, IonToolbar, IonButton, IonList,
  IonSkeletonText, IonListHeader, IonItem, IonThumbnail, IonLabel,
  IonIcon, 
  IonSpinner} from "@ionic/angular/standalone";
@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.component.html',
  styleUrls: ['./progress-indicators.component.scss'],
  standalone: true,
  imports: [IonButton, IonTitle, IonHeader, IonToolbar, 
    IonButtons, IonMenuButton,
    IonContent, IonProgressBar, IonList, IonSkeletonText, IonListHeader,
    IonItem, IonThumbnail, IonLabel, IonIcon, NgIf,
    IonSpinner
  ]
})
export class ProgressIndicatorsComponent  implements OnInit {

  public progress = 0;
  cargando: boolean = false;
  public loaded = false;

  constructor() { 

      setInterval(() => {
        this.progress += 0.01;

        // Reset the progress bar when it reaches 100%
        // to continuously show the demo
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 50);

  }

  ngOnInit() {
    this.action();
  }

  action() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
  }

}
