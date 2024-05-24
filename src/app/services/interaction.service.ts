import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private loading: HTMLIonLoadingElement

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading(message: string = 'Cargando...') {
    this.loading = await this.loadingCtrl.create({
      message
    });
    this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
    this.loading = null;
  }

  
}
