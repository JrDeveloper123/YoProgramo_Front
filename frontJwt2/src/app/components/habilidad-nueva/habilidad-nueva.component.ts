import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-habilidad-nueva',
  templateUrl: './habilidad-nueva.component.html',
  styleUrls: ['./habilidad-nueva.component.css']
})
export class HabilidadNuevaComponent implements OnInit {
  percentage = 0;
  technology = '';
  

  constructor(
    private experienciaService: HabilidadesService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const experiencia = new Habilidades (this.technology, this.percentage,);
    this.experienciaService.save(experiencia).subscribe(
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
