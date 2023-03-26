import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Imagen } from 'src/app/models/imagen';
import { Persona } from 'src/app/models/persona';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  implements OnInit{

  persona: Persona ;
  imagen:Imagen;
  roles: string[];
  isAdmin = false;
 
  constructor(
    private personaService: PersonaService,
    private imagenService: ImagenService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

  ngOnInit() {
    this.cargarPersona();
    this.cargarImagenes();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });


  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe(
      data => {
        console.log("DATA",data);
        this.persona = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarImagenes(): void {
    this.imagenService.detail(1).subscribe(
      data => {
        console.log("DATA",data);
        this.imagen = data;
      },
      err => {
        console.log(err);
      }
    );
  }


}
 
  
   