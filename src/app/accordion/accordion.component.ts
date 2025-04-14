import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent implements OnInit {
  faqItems = [
    {
      question: '¿Lorem ipsum dolor sit amet consectetur adipiscing?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum...'
    },
    {
      question: '¿Elit posuere blandit quam himenaeos eros nunc?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum...'
    },
    {
      question: '¿Tempus nisi volutpat integer odio vel?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum...'
    },
    {
      question: '¿Dapibus vitae taciti mus metus tincidunt eu vestibulum?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum...'
    },
    {
      question: '¿Maecenas pharetra purus id lacus bibendum sollicitudin?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, accumsan placerat metus condimentum...'
    }
  ];

  panelStates: boolean[] = [];

  ngOnInit(): void {
    this.panelStates = new Array(this.faqItems.length).fill(false);
  }
}
