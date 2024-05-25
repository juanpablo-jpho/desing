import { Component, OnInit, ViewChild } from '@angular/core';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonInput, IonListHeader, IonLabel, IonText,
  IonTextarea} from "@ionic/angular/standalone";


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, IonInput,
    IonListHeader, IonLabel,
    IonText, IonTextarea
  ]
})
export class TextareaComponent  implements OnInit {

  @ViewChild('textarea') textarea: IonTextarea

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.textarea.setFocus();
    }, 200);
  }

  action(ev: any) {
    console.log('ev -> ', ev);
    
  }

}
