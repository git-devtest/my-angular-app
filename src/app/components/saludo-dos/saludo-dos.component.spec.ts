import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoDosComponent } from './saludo-dos.component';

describe('SaludoDosComponent', () => {
  let component: SaludoDosComponent;
  let fixture: ComponentFixture<SaludoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaludoDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
