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
import { CommonModule } from '@angular/common';

import { PrincipalImageComponent } from '../principal-image/principal-image.component';
import { ImageShadowComponent } from '../image-shadow/image-shadow.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { SchoolIconComponent } from '../shared/school-icon/school-icon.component';
import { BallonIconComponent } from '../shared/ballon-icon/ballon-icon.component';
import { MetalImageComponent } from '../metal-image/metal-image.component';
import { GoalsComponent } from '../goals/goals.component';
import { SlideComponent } from '../slide/slide.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { BreadscrumbComponent } from '../shared/breadscrumb/breadscrumb.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
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
    PrincipalImageComponent,
    ImageShadowComponent,
    CommonModule,
    InfoCardComponent,
    MetalImageComponent,
    GoalsComponent,
    SlideComponent,
    AccordionComponent,
    BreadscrumbComponent,
    FormComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsShadow = [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.',
      buttonText: 'Click Here',
      imageUrl: 'assets/images/rectangle1.png'
    },
    {
      title: 'Dolor sir amet',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere',
      buttonText: 'Click Here',
      imageUrl: 'assets/images/rectangle3.png'
    },
    {
      title: 'Consectetur adipiscing',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.',
      buttonText: 'Click Here',
      imageUrl: 'assets/images/rectangle2.png'
    }
  ];

  infoCards = [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      buttonText: 'Click Here',
      icon: SchoolIconComponent
    },
    {
      title: 'Consectetur adipiscing',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit posuere blandit quam, himenaeos eros nunc tempus nisi volutpat integer odio vel, dapibus vitae taciti mus metus tincidunt eu vestibulum.',
      buttonText: 'Click Here',
      icon: BallonIconComponent
    },
  ]
}
