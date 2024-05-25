import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonListHeader, IonLabel, IonText,
  IonCheckbox} from "@ionic/angular/standalone";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, 
    IonListHeader, IonLabel,
    IonText, IonCheckbox,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CheckboxComponent  implements OnInit {

  datosForm = this.fb.group({
    alergias: [null], 
  });

  alergias: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  action(ev: any = null) {
    console.log('alergias -> ', this.alergias);
    console.log('ev -> ', ev);
  }

  changeCheckbox(ev: any) {
    console.log('changeCheckbox -> ', this.alergias);
    console.log('changeCheckbox -> ', ev);
    
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
