import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private  medicamentoService: MedicamentoService) { }

  medicamento: Medicamento = {
    idMedicamento:0,
    nombre:'',
    precio: 0.0,
    stock:0,
    laboratorio:''
  };

  ngOnInit(): void {
  }
saveMedicamento(){
  console.log(">>>Save Inicio Impresion");
    console.log(this.medicamento);
    console.log(">>>Save Fin Impresion");

  this.medicamentoService.create(this.medicamento).subscribe(
  response =>{
            console.log(response.mensaje);
            alert(response.mensaje)
          },
          error =>{
            console.log(error);
          }
      )
}
}
