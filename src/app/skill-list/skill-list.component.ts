import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  firstTitle = [
    {
      title: 'AUSDAUER',
      text: 'Kein Problem! Joggen immer gerne und manchmal auch für einen Sprint zu haben.',
      img: 'ausdauer1.jpg',
    },
    {
      title: 'GELASSEN',
      text: 'Meistens. Vor allem aber, wenn es hektisch wird.',
      img: 'gelassenheit.jpg',
    },
    {
      title: 'ROSAROT',
      text: '… sehe ich immer dann, wenn es um schöne Dinge geht. Liegt vermutlich am ausgeprägten Stilbewusstsein.',
      img: 'aufbluehen.jpg',
    },
    {
      title: 'TREFFSICHER',
      text: 'In Bestform als Teamplayer.',
      img: 'treffsicher.jpg',
    },
  ];
  constructor() {
    // this.firstTitle = 'AAA';
  }

  ngOnInit(): void {}
}
