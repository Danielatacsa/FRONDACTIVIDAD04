import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicamentoComponent } from './add-medicamento.component';

describe('AddMedicamentoComponent', () => {
  let component: AddMedicamentoComponent;
  let fixture: ComponentFixture<AddMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(async() => {
    fixture = TestBed.createComponent(AddMedicamentoComponent);
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