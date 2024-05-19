import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPopover, 
  IonTitle, IonToggle, IonToolbar, 
  PopoverController, IonIcon, IonLabel, IonItem } from '@ionic/angular/standalone';
import { IonPopoverComponent } from '../ion-popover/ion-popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonIcon, 
    IonHeader, IonToolbar, IonTitle,
    IonToggle, IonContent, IonButtons, IonMenuButton,
    IonPopover, 
    IonButton,
    IonPopoverComponent
  ]
})
export class PopoverComponent  implements OnInit {


  isOpen: boolean = false;


  @ViewChild('popover') popover: IonPopover;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  openWithProperty(ev: any) {
    this.popover.event = ev;
    this.isOpen = true;
  }

  example(ev: any) {
    this.isOpen = false
    console.log('example -> ', ev);
    
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: IonPopoverComponent,
      event: ev,
      side: "bottom",
      alignment: "end"
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: `, data);
  }

}
