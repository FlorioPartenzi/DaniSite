import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchListeComponent } from './buch-liste.component';

describe('BuchListeComponent', () => {
  let component: BuchListeComponent;
  let fixture: ComponentFixture<BuchListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuchListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
