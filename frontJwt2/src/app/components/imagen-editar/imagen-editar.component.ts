import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Imagen } from 'src/app/models/imagen';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-imagen-editar',
  templateUrl: './imagen-editar.component.html',
  styleUrls: ['./imagen-editar.component.css']
})
export class ImagenEditarComponent  implements OnInit {
  imagen: Imagen = null;

  constructor(
    private habilidadService: ImagenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
      data => {
        this.imagen = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadService.update(id, this.imagen).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
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
