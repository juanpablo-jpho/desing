import { Component, OnInit } from '@angular/core';
import { IonTitle, IonHeader, IonCardHeader, IonFooter, 
  IonToolbar, IonContent, IonButtons, IonMenuButton, IonActionSheet, 
  IonButton, IonLabel, IonIcon, IonItem, ActionSheetController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonActionSheet, 
    IonCardHeader, IonTitle, 
    IonFooter,
    IonHeader,
    IonToolbar, IonContent, IonButton, IonItem,
  IonButtons, IonMenuButton],
})
export class ActionSheetComponent  implements OnInit {

  isActionSheetOpen = false;
  actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: "hola"
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      backdropDismiss: false,
      subHeader: 'hola',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-social',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],

      // cssClass: 'my-custom-class'
    });

    await actionSheet.present();
    const {data, role} = await actionSheet.onWillDismiss();
    // const response = await actionSheet.onWillDismiss();
    // console.log('response  -> ', response.data );
    if (data.action == 'share') {
      console.log('compartir');
      
    }
    
  }

  logResult(ev: any) {
    console.log('logResult -> ', ev);
    if (ev.detail.data == "hola") {
      console.log('compartir');
      
    }
  }

}
