import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { HeroComponent } from "./components/hero/hero.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'szuch-portfolio';

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void { 
    let dialogRef = 
    this.dialog.open(DialogComponent);
  } 
}
