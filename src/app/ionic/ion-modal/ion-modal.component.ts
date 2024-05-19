import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, 
  IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.component.html',
  styleUrls: ['./ion-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonTitle,
    IonButtons, IonButton
  ]
})
export class IonModalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  save() {
    // proceso....
    const data = {msg: true}
    this.modalController.dismiss(data, 'nada');
  }

  async dismiss() {
    // const modal = await this.modalController.getTop()
    // modal.canDismiss = true;
    this.modalController.dismiss();
  }

}
