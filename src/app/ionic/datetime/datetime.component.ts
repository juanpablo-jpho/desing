import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, 
  IonTitle, IonToolbar, IonDatetime, IonDatetimeButton, 
  IonModal, IonLabel, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonLabel, IonDatetime, 
    IonHeader, IonButtons, IonMenuButton, 
    IonContent, IonToolbar, IonTitle,
    IonDatetimeButton, IonModal,
    FormsModule
  ]
})
export class DatetimeComponent  implements OnInit {

  @ViewChild('datetime') dateTime: IonDatetime

  date: any;

  constructor() { }

  ngOnInit() {}

  changeTime(ev: any) {
    console.log('changeTime -> ', ev);
    console.log('dateTime.value -> ', this.dateTime.value);
    const select: any = this.dateTime.value
    const date = new Date(select);
    console.log('date -> ', date);
    

  }

  save() {
    console.log('save -> ', this.date);
    
  }

}
