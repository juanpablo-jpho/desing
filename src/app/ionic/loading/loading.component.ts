import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, 
  IonLoading, IonMenuButton, IonTitle, IonToolbar, 
  LoadingController} from '@ionic/angular/standalone';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonButtons, IonMenuButton,
    IonContent, IonTitle, IonButton, IonLoading
  ]
})
export class LoadingComponent  implements OnInit {

  procesando: boolean = false;

  @ViewChild('loading') loading: IonLoading;

  constructor(private loadingController: LoadingController,
              private interactionService: InteractionService
  ) { }

  ngOnInit() {}


  async actionWithController() {
    console.log('init action');
    const loading = await this.loadingController.create({
      message: 'Copiando...',
      spinner: 'bubbles',
      cssClass: 'custom-loading',
      backdropDismiss: true,
      // showBackdrop: false
    });
    await loading.present();
    setTimeout(() => {
      console.log('finish action');
      loading.dismiss();
    }, 2000);
  }

  async actionWithViewChild() {
    console.log('init action');
    this.loading.message = 'eliminando...';
    await this.loading.present();
    setTimeout(() => {
      console.log('finish action');
      this.loading.dismiss();
    }, 2000);
  }

  async actionConIsOpen() {
    console.log('init action');
    this.procesando = true;
    setTimeout(() => {
      console.log('finish action');
      this.procesando = false;
    }, 2000);
  }

  async actionWithInterectionService() {
    console.log('init action');
    await this.interactionService.showLoading('Copiando...')
    setTimeout(() => {
      console.log('finish action');
      this.interactionService.dismissLoading();
    }, 2000);
  }


}
