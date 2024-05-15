import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon, IonButton, IonLabel, IonContent, IonSplitPane, IonHeader, IonToolbar, IonMenu, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import * as all  from 'ionicons/icons';

import { InteractionService } from './services/interaction.service';
import { IoniconsService } from './services/ionicons.service';
import { SidemenuComponent } from './shared/components/sidemenu/sidemenu.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButtons, 
    IonHeader, IonSplitPane, IonContent, IonLabel, 
    IonButton, IonApp, IonRouterOutlet, IonIcon,
    IonToolbar, IonMenu, IonTitle,
    SidemenuComponent,
    IonMenuButton
  ],
})
export class AppComponent {
  
  constructor(
              private interactionService: InteractionService,
              private ioniconsService: IoniconsService
            ) {

                // addIcons(all);

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


