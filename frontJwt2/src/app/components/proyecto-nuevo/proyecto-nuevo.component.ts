import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto-nuevo',
  templateUrl: './proyecto-nuevo.component.html',
  styleUrls: ['./proyecto-nuevo.component.css']
})
export class ProyectoNuevoComponent implements OnInit{
  name = '';
  detail ='';
  urlImage = '';
  urlProyect = '';

  constructor(
    private productoService: ProyectoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const producto = new Proyecto (this.name, this.detail, this.urlProyect,this.urlImage);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}

