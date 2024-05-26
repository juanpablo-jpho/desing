import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonLabel, IonMenuButton, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonItem, IonCardSubtitle, IonCardContent, IonCardTitle, IonCard, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonItem, 
    IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons,
    IonContent, IonSegment, IonSegmentButton, IonLabel,
    IonCard, IonCardHeader,
    FormsModule
  ]
})
export class SegmentComponent  implements OnInit {


  categorias: string[] = [
    'Hamburguesas', 'Bebidas', 'Sopas', 'Especiales', 'Hotdogs'
  ];

  categoriaSelected: string = 'Hotdogs';

  productos: any[];

  constructor() { }

  ngOnInit() {}

  changeCategoria() {
    console.log('changeCategoria -> ', this.categoriaSelected);
    this.loadProductos(this.categoriaSelected);
    
  }

  loadProductos(categoria: string) {
    this.productos = [];
    setTimeout(() => {
      this.productos.push({name: 'item 1', categoria})
      this.productos.push({name: 'item 2', categoria})
      this.productos.push({name: 'item 3', categoria})
      this.productos.push({name: 'item 4', categoria})
      
    }, 1000);
  }

}
