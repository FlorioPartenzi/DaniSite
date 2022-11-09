import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buch',
  templateUrl: './buch.component.html',
  styleUrls: ['./buch.component.scss'],
})
export class BuchComponent implements OnInit {
  @Input() text: String | undefined;
  @Input() imgUrl: String | undefined;
  constructor() {}

  ngOnInit(): void {}
}
