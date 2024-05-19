import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, 
  IonContent, IonModal, IonButton, IonItem, IonInput, 
  IonButtons, ModalController, 
  IonMenuButton} from "@ionic/angular/standalone";
import { IonModalComponent } from '../ion-modal/ion-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonModal, IonHeader, IonToolbar, IonTitle, 
    IonContent,
    IonButton,
    IonButtons,
    IonMenuButton
  ]
})
export class ModalComponent  implements OnInit {


  @ViewChild('modal') modalOpciones: IonModal;
  presentingElement: any = null;

  open: boolean = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  confirm() {
    const data = {rol: 'admin'}
    this.modalOpciones.canDismiss = true
    this.modalOpciones.dismiss(data, 'confirm')
  }

  send(ev: any) {
    console.log('send -> ', ev);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: IonModalComponent,
      // canDismiss: false,
      backdropDismiss: false,
      mode: 'ios',
      initialBreakpoint:0.25,
      breakpoints:[0, 0.25, 0.5, 0.75],
      backdropBreakpoint: 1,
      handleBehavior:"cycle",
      // presentingElement: this.presentingElement
    });
    modal.present();

    // const response = await modal.onWillDismiss();
    // console.log('response -> ', response);
    
    const { data, role } = await modal.onWillDismiss();
    if (data) {
      //proceso
      console.log('onWillDismiss -> ', data);
      
    }
    

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }

  }



}
