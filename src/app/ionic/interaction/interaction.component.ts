import { Component, OnInit } from '@angular/core';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonLabel, IonItem, IonIcon, IonButton } from '@ionic/angular/standalone';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,
    IonMenuButton, IonItem, IonIcon, IonButton
  ]
})
export class InteractionComponent  implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {}

  save() {}

  eliminar() {
    this.interactionService.preguntaAlert('Importante', 'Deseas eliminar')
  }

}
