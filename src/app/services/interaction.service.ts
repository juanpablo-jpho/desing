import { Injectable } from '@angular/core';
import { AlertController, IonicSafeString, 
  LoadingController, ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private loading: HTMLIonLoadingElement
  private  alert: HTMLIonAlertElement;

  constructor(private loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertController: AlertController
  ) { }

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

  async showToast(message: string, duration: number = 2000, position: "bottom" | "top" | "middle" = 'bottom') {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      cssClass: 'tipoletra',
      position,
      color: 'dark'
    });
    toast.present();
  }

  async preguntaAlert(header: string, message: string, textCANCEL: string = null, textOK: string = 'OK'): Promise<boolean> {
    return new Promise(  async  (resolve) => { 
        let buttons = [];
        if (textCANCEL) {
            buttons.push( {
              text: textCANCEL,
              role: 'cancel',
              handler: () => {
                    resolve(false);
              }
            });
        }
        buttons.push({
          text: textOK,
          handler: async () => {
            resolve(true);
          }
        })  
        if (!this.alert) {
          this.alert = await this.alertController.create({
            header,
            message: (new IonicSafeString(message)).value,
            buttons,
          });
          await this.alert.present();
          await this.alert.onWillDismiss();
        }
        this.alert = null;
    });
  }

  closeAlert() {
    if (this.alert) {
      this.alert.dismiss();
    }
  }


  
}
