import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEmploiComponentComponent } from './offre-emploi-component.component';

describe('OffreEmploiComponentComponent', () => {
  let component: OffreEmploiComponentComponent;
  let fixture: ComponentFixture<OffreEmploiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreEmploiComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreEmploiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
