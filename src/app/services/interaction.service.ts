import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    console.log('showLoading()');
    const loading = await this.loadingCtrl.create({
      message: 'cargandoo.',
      duration: 3000,
    });
    loading.present();
  }
}
