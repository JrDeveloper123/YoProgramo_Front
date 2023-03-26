import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionEditarComponent } from './components/educacion-editar/educacion-editar.component';
import { EducacionNuevaComponent } from './components/educacion-nueva/educacion-nueva.component';
import { ExperienciaEditarComponent } from './components/experiencia-editar/experiencia-editar.component';
import { ExperienciaNuevaComponent } from './components/experiencia-nueva/experiencia-nueva.component';
import { HabilidadEditarComponent } from './components/habilidad-editar/habilidad-editar.component';
import { HabilidadNuevaComponent } from './components/habilidad-nueva/habilidad-nueva.component';
import { ImagenEditarComponent } from './components/imagen-editar/imagen-editar.component';
import { IndexComponent } from './components/index/index.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectoEditarComponent } from './components/proyecto-editar/proyecto-editar.component';
import { ProyectoNuevoComponent } from './components/proyecto-nuevo/proyecto-nuevo.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectoGuardService as guard } from './guards/proyecto-guard.service';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  
  { path: 'proyecto', component: ProyectoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoProyecto', component: ProyectoNuevoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } }, 
  { path: 'editarProyecto/:id', component: ProyectoEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'banner', component: BannerComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'editarPersona/:id', component: PersonaEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoEducacion', component: EducacionNuevaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } }, 
  { path: 'editarEducacion/:id', component: EducacionEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoExperiencia', component: ExperienciaNuevaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } }, 
  { path: 'editarExperiencia/:id', component: ExperienciaEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoHabilidad', component: HabilidadNuevaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } }, 
  { path: 'editarHabilidad/:id', component: HabilidadEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarImagen/:id', component: ImagenEditarComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
