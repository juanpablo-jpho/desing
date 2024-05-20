import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonIcon, IonTitle, IonHeader, 
  IonContent, IonToolbar, IonMenuButton, 
  IonToast,
  ToastController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonIcon, 
    IonButtons, IonButton, 
    IonContent, IonToolbar,
    IonMenuButton,
    IonToast
  ]
})
export class ToastComponent  implements OnInit {

  isToastOpen = false;

  toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ]

  constructor(private toastController: ToastController) { }

  ngOnInit() {}



  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      position,
      buttons: this.toastButtons,
      swipeGesture:"vertical",
      icon:"globe",
      color: 'success'
    });
    await toast.present();
    const response = await toast.onWillDismiss();
    console.log('response -> ', response);
    
  }

  setRoleMessage(ev: any) {
    const { role } = ev.detail;
    console.log(`Dismissed with `, ev);

  }

}
