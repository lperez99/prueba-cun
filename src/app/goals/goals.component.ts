import { Component } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoalsIcon1Component } from '../shared/goals-icon-1/goals-icon-1.component';
import { GoalsIcon2Component } from '../shared/goals-icon-2/goals-icon-2.component';
import { GoalsIcon3Component } from '../shared/goals-icon-3/goals-icon-3.component';
import { GoalsIcon4Component } from '../shared/goals-icon-4/goals-icon-4.component';
import { GoalsCardsComponent } from "../shared/goals-cards/goals-cards.component";


@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [
    MatSliderModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    CommonModule,
    GoalsCardsComponent
],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  goalsCards = [
    {
      title: 'Sed accumsan erat id scelerisque sodales',
      description: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
      icon: GoalsIcon1Component
    },
    {
      title: 'Sed accumsan erat id scelerisque sodales',
      description: 'Aliquam vulputate magna in viverra mattis. Aliquam volutpat dui fringilla leo posuere, sed facilisis tortor consequat.',
      icon: GoalsIcon2Component
    },
    {
      title: 'Consectetur adipiscing',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      icon: GoalsIcon3Component
    },
    {
      title: 'Consectetur adipiscing',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      icon: GoalsIcon4Component
    },
  ]
}
