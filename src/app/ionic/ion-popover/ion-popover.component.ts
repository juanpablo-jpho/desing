import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonLabel, IonItem, IonList, PopoverController, IonRouterLink } from "@ionic/angular/standalone";

@Component({
  selector: 'app-ion-popover',
  templateUrl: './ion-popover.component.html',
  styleUrls: ['./ion-popover.component.scss'],
  standalone: true,
  imports: [
    IonItem, IonLabel, IonContent, 
    IonList,
    RouterModule,
    IonRouterLink
  ]
})
export class IonPopoverComponent  implements OnInit {



  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  action() {
    this.popoverController.dismiss({rol: 'admin'}, 'apply')
  }

  dismiss() {
    this.popoverController.dismiss();
  }

}
