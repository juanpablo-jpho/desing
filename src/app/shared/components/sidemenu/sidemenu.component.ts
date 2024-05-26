import { Component, OnInit, inject } from '@angular/core';
import { IonContent, IonHeader, IonMenuToggle, IonTitle, 
         IonToolbar, IonIcon, IonButtons, IonButton, IonLabel, 
         IonItem, IonRouterLink, MenuController } from "@ionic/angular/standalone";
import { Models } from 'src/app/models/models';
import { UserService } from '../../../services/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonButton, IonButtons, IonIcon, 
    IonHeader, IonContent, 
    IonToolbar, IonTitle,
    IonMenuToggle,
    RouterModule,
    CommonModule,
    IonRouterLink
  ]
})
export class SidemenuComponent  implements OnInit {

  menu: Menu[] = [];

  constructor(private menuController: MenuController) { 
      this.initMenu();
  }

  ngOnInit() {}

  initMenu() {
    this.menu = [
      {name: 'Content', enlace: '/content', icon: 'square-outline'},
      {name: 'Items', enlace: '/items', icon: 'list'},
      {name: 'Buttons', enlace: '/buttons', icon: 'caret-forward-circle'},
      {name: 'Menú', enlace: '/menu', icon: 'menu'},
      {name: 'Sliding', enlace: '/sliding', icon: 'hand-left'},
      {name: 'Select', enlace: '/select', icon: 'ellipsis-vertical-circle'},
      {name: 'Card', enlace: '/card', icon: 'square'},
      {name: 'Modal', enlace: '/modal', icon: 'browsers'},
      {name: 'Popover', enlace: '/popover', icon: 'stop-circle'},
      {name: 'Action Sheet', enlace: '/action-sheet', icon: 'filter-circle'},
      {name: 'Alert', enlace: '/alert', icon: 'alert-circle'},
      {name: 'Accordion', enlace: '/accordion', icon: 'swap-vertical'},
      {name: 'Toast', enlace: '/toast', icon: 'remove'},
      {name: 'Loading', enlace: '/loading', icon: 'refresh'},
      {name: 'Progress Indicators', enlace: '/progress-indicators', icon: 'hourglass'},
      {name: 'Inputs', enlace: '/input', icon: 'keypad'},
      {name: 'Textarea', enlace: '/textarea', icon: 'document-text'},
      {name: 'Checkbox', enlace: '/checkbox', icon: 'checkbox'},
      {name: 'Radio', enlace: '/radio', icon: 'radio-button-on'},
      {name: 'Toggle', enlace: '/toggle', icon: 'toggle'},
      {name: 'Infinite Scroll', enlace: '/ion-infinite-scroll', icon: 'infinite'},
      {name: 'Datetime', enlace: '/datetime', icon: 'calendar'},
      {name: 'Tabs', enlace: '/tabs', icon: 'ellipsis-horizontal'},
      {name: 'Grid', enlace: '/grid', icon: 'apps'},
      {name: 'Interacción service', enlace: '/interaction', icon: 'help-circle'},
      

      
      
    ];
  } 

  async closeMenu() {
    const isOpen = await this.menuController.isOpen('sidemenu');
    if (isOpen) {
      this.menuController.close('sidemenu');
    }
  }

}

interface Menu {
  name: string;
  enlace: string;
  icon: string;
  roles?: Models.Auth.Rol[]
}

