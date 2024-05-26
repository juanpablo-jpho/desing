import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonMenuButton,
   IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, 
   IonButton, 
   IonBackButton} from '@ionic/angular/standalone';
import { InteractionService } from '../../services/interaction.service';


@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonMenuButton, IonItem, IonIcon, IonButton,
    IonBackButton
  ]
})
export class InteractionComponent  implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {}

  async save() {
    await this.interactionService.showLoading('guardando...')
    setTimeout(() => {
      this.interactionService.dismissLoading();
      this.interactionService.showToast('guardado con éxito')
    }, 2000);
  }

  async eliminar() {
    const responseAlert =  await this.interactionService.presentAlert('Importante', 
    '¿Seguro que deseas eliminar el item <strong>zapatos</strong>?', 'Cancelar','SI');
    console.log('responseAlert -> ', responseAlert);
    if (responseAlert) {
      await this.interactionService.showLoading('Eliminando...');
      // await action();
      setTimeout(() => {
        this.interactionService.dismissLoading();
        this.interactionService.showToast('Eliminado con éxito')
      }, 3000);
    }
    
  }

}
