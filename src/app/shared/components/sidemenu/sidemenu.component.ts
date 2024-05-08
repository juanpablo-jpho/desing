import { Component, OnInit, inject } from '@angular/core';
import { IonContent, IonHeader, IonMenuToggle, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonLabel, IonItem, IonRouterLink, MenuController } from "@ionic/angular/standalone";
import { Models } from 'src/app/models/models';
import { UserService } from '../../../services/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

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
  showMenu: Menu[] = [];
  userService: UserService = inject(UserService);


  constructor(private menuController: MenuController) { 
      this.initMenu();
      this.initShowMenu();
  }

  ngOnInit() {}

  initMenu() {
    this.menu = [
      {name: 'Home', enlace: '/home', icon: 'home'},
      {name: 'Tienda', enlace: '/store/home', icon: 'storefront'},
      {name: 'Contact', enlace: '/contact', icon: 'call'},
      {name: 'Notificaciones', enlace: '/notificaciones', icon: 'notifications'},
      {name: 'Administrar usuarios', enlace: '/user/admin', icon: 'people', roles: ['admin']},
    ];
  }

  async initShowMenu() {
    this.showMenu = [];
    await this.userService.getState();
    this.menu.forEach( async (opc) => {
        if (opc.roles) {
            const valid = true // await this.userService.isRol(opc.roles);
            if (valid) {
              this.showMenu.push(opc)
            }
        } else {
          this.showMenu.push(opc)
        }
    });
    console.log('menushow -> ', this.showMenu);
    
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

