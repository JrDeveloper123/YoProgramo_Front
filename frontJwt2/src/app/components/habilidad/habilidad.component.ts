import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';
import { CircularProgressbar } from 'react-circular-progressbar';
@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidades[] = [];
  roles: string[];
  isAdmin = false;
 
  constructor(
    private habilidadService: HabilidadesService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

  ngOnInit() {
    this.cargarHabilidad();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarHabilidad(): void {
    this.habilidadService.obtenerDatos().subscribe(
      data => {
        console.log("DATA",data);
        this.habilidades = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.habilidadService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarHabilidad();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
