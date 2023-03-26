import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-nueva',
  templateUrl: './experiencia-nueva.component.html',
  styleUrls: ['./experiencia-nueva.component.css']
})
export class ExperienciaNuevaComponent implements OnInit {
  company = '';
  currentJob = 0;
  description = '';
  entry = '';
  discharge = '';
  position = '';

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const experiencia = new Experiencia (this.company, this.currentJob, this.description,this.entry,this.discharge,this.position);
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
