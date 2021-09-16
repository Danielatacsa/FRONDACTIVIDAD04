import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlumnoComponent } from './add-alumno.component';

describe('AddAlumnoComponent', () => {
  let component: AddAlumnoComponent;
  let fixture: ComponentFixture<AddAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AddAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

