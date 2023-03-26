import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{

  
  persona: Persona=null;
  roles: string[];
  isAdmin = false;
  form: FormGroup;
  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    ) { }

  ngOnInit() {
    this.cargarPersona();
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

}
