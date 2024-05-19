import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonTitle, IonHeader, IonToolbar, 
  IonMenuButton, IonButtons,  
  IonContent, IonItem, IonSelect, IonSelectOption,
  IonList, IonLabel, IonButton, 
  IonListHeader, IonText, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonButton, IonLabel, 
    IonHeader, IonTitle, 
    IonToolbar, IonMenuButton, IonButtons,
    IonContent,
    IonItem, IonSelect, IonSelectOption,
    IonList, IonListHeader,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SelectComponent  implements OnInit {

  roles: Rol[] = [
    {name: 'admin', description: 'Administrador'},
    {name: 'motorizado', description: 'Motorizado'},
    {name: 'cliente', description: 'Cliente'}
  ]

  bancos: Cuenta[] = [
    {  nombre: 'Banco Amazonas', codigo: 10383484, tipo: 'Ahorros' },
    {  nombre: 'Banco America', codigo: 99273736, tipo: 'Corriente' },
    {  nombre: 'Banco Gran Alianza', codigo: 9384746, tipo: 'Corriente' },
  ];

  rolSelected: Rol;
  bancoSelected: Cuenta;

  datosForm = this.fb.group({
    banco: [null, [Validators.required]], 
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  handleChange(ev: any) {
    console.log('handleChange -> ', ev.detail.value);
    
  }

  save() {
    console.log('save -> ', this.rolSelected);
  }

  saveBanco() {
    console.log('save -> ', this.bancoSelected);
  }

  enviarForm() {
    console.log('datosForm -> ', this.datosForm);
    if (this.datosForm.valid) {
      console.log('valid');
      const data = this.datosForm.value;
      console.log('data -> ', data);
      
    }
  }

}

interface Rol {
  name: string,
  description: string
}

interface Cuenta {
  nombre: string;
  codigo: number;
  tipo: string;
}
