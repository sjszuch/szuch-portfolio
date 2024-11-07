import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

}
