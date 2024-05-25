import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonListHeader, IonLabel, IonText,
  IonCheckbox,
  IonRadioGroup,
  IonRadio} from "@ionic/angular/standalone";


@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, 
    IonListHeader, IonLabel,
    IonRadioGroup, IonRadio,
    IonText, IonCheckbox,
    FormsModule,
    ReactiveFormsModule,
    // CommonModule, 
    // NgFor
  ]
})
export class RadioComponent  implements OnInit {

  

  roles: Rol[] = [
    {name: 'admin', description: 'Administrador'},
    {name: 'motorizado', description: 'Motorizado'},
    {name: 'cliente', description: 'Cliente'}
  ]

  rolSelected: Rol;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loadOption();
    }, 1000);
  }

  handleChange(ev: any) {
    console.log('handleChange -> ', ev);
    console.log('rolSelected -> ', this.rolSelected);
    
  }

  loadOption() {
    this.rolSelected = this.roles[1]
  }

}


interface Rol {
  name: string,
  description: string
}