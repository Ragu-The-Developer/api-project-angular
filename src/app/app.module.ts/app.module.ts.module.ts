import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { LoginPageComponent } from '../login/login-page.component';
import { MovieComponent } from '../movie/movie.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    LoginPageComponent,
    MovieComponent,
    BrowserModule,
    FormsModule,
  ],
  
})
export class AppModuleTsModule { }
