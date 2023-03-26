import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencias: Experiencia[] = [];
  roles: string[];
  isAdmin = false;
 
  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

  ngOnInit() {
    this.cargarExperiencias();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarExperiencias(): void {
    this.experienciaService.obtenerDatos().subscribe(
      data => {
        console.log("DATA",data);
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarExperiencias();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
