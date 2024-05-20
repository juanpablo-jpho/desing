import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonTitle, IonHeader, IonContent, IonMenuButton, 
  IonButtons, IonAlert, IonButton, IonLabel, IonIcon, IonItem, 
  AlertController, IonListHeader, 
  IonList} from "@ionic/angular/standalone";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonIcon, IonLabel, IonAlert, IonHeader, IonTitle, IonToolbar, 
    IonContent,
    IonMenuButton, IonButtons, IonButton,
    IonItem, IonList
  ]
})
export class AlertComponent  implements OnInit {

  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
  isAlertOpen = false;

  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  setResult(ev: any) {
    console.log('setResult -> ', ev);
    if (ev.detail.role == 'cancel') {

    }
    if (ev.detail.role == 'confirm') {
      console.log('aceptar');
      ev.detail.data.values[0]
      
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [

      {
        text: 'cancelar',
        role:'cancel'
      },
      {
        text: 'aceptar',
        role: 'aceptar'
      },
    ]
    });
  
    await alert.present();
    const response = await alert.onWillDismiss();
    console.log('response -> ', response);
    
  }

}
