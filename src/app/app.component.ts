import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon, IonButton, IonLabel, IonContent } from '@ionic/angular/standalone';
import { FirestoreService } from './firebase/firestore.service';
import { AuthenticationService } from './firebase/authentication.service';
import { UserService } from './services/user.service';
import { WebService } from './services/web.service';
import { AnalyticsService } from './firebase/analytics.service';

import { addIcons } from 'ionicons';
import { home, logoIonic } from 'ionicons/icons';
import { InteractionService } from './services/interaction.service';
import { IoniconsService } from './services/ionicons.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonLabel, IonButton, IonApp, IonRouterOutlet, IonIcon],
})
export class AppComponent {
  
  constructor(private interactionService: InteractionService,
              private ioniconsService: IoniconsService) {

          this.ioniconsService.loadAllIcons();
          // this.ioniconsService.loadListIcons();
  }


  async showLoading() {
  //   console.log('showLoading()');
    
  //   const loading = await this.loadingCtrl.create({
  //     message: 'cargandoo.',
  //     duration: 3000,
  //   });

  //   loading.present();
     this.interactionService.showLoading();
  }
  
  nada() {}




}


