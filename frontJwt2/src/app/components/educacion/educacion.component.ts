import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { Proyecto } from 'src/app/models/proyecto';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudios: Educacion[] = [];
  roles: string[];
  isAdmin = false;
 
  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

  ngOnInit() {
    this.cargarEstudios();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarEstudios(): void {
    this.educacionService.obtenerDatos().subscribe(
      data => {
        console.log("DATA",data);
        this.estudios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educacionService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEstudios();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }
}
