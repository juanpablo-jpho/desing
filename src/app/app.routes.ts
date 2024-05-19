import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },

  // IONIC
  {
    path: 'content',
    loadComponent: () => import('./ionic/content/content.component').then((c) => c.ContentComponent)
  },
  {
    path: 'icons',
    loadComponent: () => import('./ionic/icons/icons.component').then((c) => c.IconsComponent)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./ionic/buttons/buttons.component').then((c) => c.ButtonsComponent)
  },
  {
    path: 'items',
    loadComponent: () => import('./ionic/items/items.component').then((c) => c.ItemsComponent)
  },
  {
    path: 'menu',
    loadComponent: () => import('./ionic/menu/menu.component').then((c) => c.MenuComponent)
  },
  {
    path: 'sliding',
    loadComponent: () => import('./ionic/sliding/sliding.component').then((c) => c.SlidingComponent)
  },
  {
    path: 'select',
    loadComponent: () => import('./ionic/select/select.component').then((c) => c.SelectComponent)
  },
  {
    path: 'card',
    loadComponent: () => import('./ionic/card/card.component').then((c) => c.CardComponent)
  },
  {
    path: 'modal',
    loadComponent: () => import('./ionic/modal/modal.component').then((c) => c.ModalComponent)
  },
  {
    path: 'popover',
    loadComponent: () => import('./ionic/popover/popover.component').then((c) => c.PopoverComponent)
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    // redirectTo: '',
    // pathMatch: 'full',
    loadComponent: () => import('./shared/pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
