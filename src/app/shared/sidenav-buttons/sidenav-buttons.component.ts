import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sidenav-buttons.component.html',
  styleUrl: './sidenav-buttons.component.scss'
})
export class SidenavButtonsComponent {

}
