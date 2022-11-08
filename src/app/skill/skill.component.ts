import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  constructor() {}
  @Input() title: String | undefined;
  @Input() text: String | undefined;
  @Input() imgUrl: String | undefined;
  ngOnInit(): void {}
}
