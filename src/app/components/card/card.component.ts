import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() link1!: string;
  @Input() link2!: string;
  @Input() link1Text!: string;
  @Input() link2Text!: string;
}
