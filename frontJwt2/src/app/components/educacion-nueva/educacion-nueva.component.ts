import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { Proyecto } from 'src/app/models/proyecto';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion-nueva',
  templateUrl: './educacion-nueva.component.html',
  styleUrls: ['./educacion-nueva.component.css']
})
export class EducacionNuevaComponent implements OnInit {
  institution = '';
  degree ='';
  entry = '';
  discharge = '';
  urlInstitution= '';
  image = '';

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const estudio = new Educacion (this.institution, this.degree, this.entry,this.discharge, this.urlInstitution,this.image);
    this.educacionService.save(estudio).subscribe(
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
