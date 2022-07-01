import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth.service';
import { FormsModule } from '@angular/forms';


import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { ModifFormationsComponent } from './modif-formations/modif-formations.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { FormateurAssocieComponent } from './formateur-associe/formateur-associe.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListeFormationsComponent,
    ModifFormationsComponent,
    AddFormationsComponent,
    FormateurAssocieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
