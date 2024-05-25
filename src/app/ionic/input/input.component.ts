import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonToolbar, IonTitle, IonHeader, IonContent, 
  IonButtons, IonMenuButton, IonList, IonItem, IonIcon, IonButton, 
  IonInput, IonListHeader, IonLabel, IonInputPasswordToggle, 
  IonText} from "@ionic/angular/standalone";
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonTitle, IonToolbar, 
    IonContent, IonButtons, IonMenuButton,
    IonList, IonItem, IonIcon,
    IonButton, IonInput,
    IonListHeader, IonLabel,
    IonText,
    IonInputPasswordToggle,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputComponent  implements OnInit {

  strongPasswordRegx = Models.Auth.StrongPasswordRegx


  datosForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]], 
    password: [null, [Validators.required, Validators.minLength(6)]], 
  });


  login = {
    email: '',
    password: '',
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}


  loginWithEmail() {
    console.log('loginWithEmail -> ', this.login);
    
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
