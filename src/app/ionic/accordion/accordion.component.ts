import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTitle, IonFooter, IonHeader,
  IonToolbar, IonContent, IonButton, 
  IonMenuButton,
  IonButtons, IonAccordion, 
  IonItem,
  IonLabel, IonAccordionGroup, 
  IonCard,
  IonList} from "@ionic/angular/standalone";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonAccordion, IonHeader, IonTitle, 
    IonFooter,
    IonToolbar, IonContent, IonButton,
    IonMenuButton, IonButtons,
    IonItem, IonLabel, IonCard,
    IonList
  ]
})
export class AccordionComponent  implements OnInit {

  accordion = '3';
  @ViewChild('accordionGroup') accordionGroup: IonAccordionGroup;

  constructor() { }

  ngOnInit() {}

  toggleAccordion() {
    if (this.accordionGroup.value === 'second') {
      this.accordionGroup.value = undefined;
    } else {
      this.accordionGroup.value = 'second';
    }
    this.accordionGroup.expand = "inset"
  }

}
