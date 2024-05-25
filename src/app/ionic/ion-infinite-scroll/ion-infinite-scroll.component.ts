import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonListHeader, IonLabel, IonText,
  IonToggle,
  IonAvatar,
  IonInfiniteScroll,
  IonInfiniteScrollContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-ion-infinite-scroll',
  templateUrl: './ion-infinite-scroll.component.html',
  styleUrls: ['./ion-infinite-scroll.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, 
    IonListHeader, IonLabel,
    IonText, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent,
  ]
})
export class IonInfiniteScrollComponent  implements OnInit {

  items: any = [];
  @ViewChild('scroll')  scroll1: IonInfiniteScroll
  
  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Items created ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    console.log('onIonInfinite -> ', ev);
    
    setTimeout(() => {
      this.generateItems();
      ev.target.complete();
      // ev.traget.disable = true;
      
      this.scroll1.disabled = true;
      // ev.target.
    }, 3000);
  }



}
