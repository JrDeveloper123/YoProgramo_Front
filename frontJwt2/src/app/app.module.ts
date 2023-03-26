import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ProyectoComponent } from './components/proyecto/proyecto.component';

import { interceptorProvider } from './interceptor/proyct-intercept.service';
import { ProyectoNuevoComponent } from './components/proyecto-nuevo/proyecto-nuevo.component';
import { ProyectoEditarComponent } from './components/proyecto-editar/proyecto-editar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { HabilidadNuevaComponent } from './components/habilidad-nueva/habilidad-nueva.component';
import { HabilidadEditarComponent } from './components/habilidad-editar/habilidad-editar.component';
import { EducacionNuevaComponent } from './components/educacion-nueva/educacion-nueva.component';
import { EducacionEditarComponent } from './components/educacion-editar/educacion-editar.component';
import { ExperienciaNuevaComponent } from './components/experiencia-nueva/experiencia-nueva.component';
import { ExperienciaEditarComponent } from './components/experiencia-editar/experiencia-editar.component';
import { ImagenEditarComponent } from './components/imagen-editar/imagen-editar.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent,
    ProyectoComponent,
    ProyectoNuevoComponent,
    ProyectoEditarComponent,
    PortfolioComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadComponent,
    FooterComponent,
    PersonaEditarComponent,
    HabilidadNuevaComponent,
    HabilidadEditarComponent,
    EducacionNuevaComponent,
    EducacionEditarComponent,
    ExperienciaNuevaComponent,
    ExperienciaEditarComponent,
    ImagenEditarComponent,
 
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
