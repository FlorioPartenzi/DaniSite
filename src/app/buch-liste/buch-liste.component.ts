import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buch-liste',
  templateUrl: './buch-liste.component.html',
  styleUrls: ['./buch-liste.component.scss'],
})
export class BuchListeComponent implements OnInit {
  buchListe = [
    {
      text: 'Kein Problem! Joggen immer gerne und manchmal auch für einen Sprint zu haben.',
      img: 'Cover-Umbrien.jpg',
    },
    {
      text: 'Meistens. Vor allem aber, wenn es hektisch wird.',
      img: 'Cover-Brodetto.jpg',
    },
    {
      text: '… sehe ich immer dann, wenn es um schöne Dinge geht. Liegt vermutlich am ausgeprägten Stilbewusstsein.',
      img: 'Cover-Pasta.jpg',
    },
    {
      text: 'In Bestform als Teamplayer.',
      img: 'Cover-Dolce.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
