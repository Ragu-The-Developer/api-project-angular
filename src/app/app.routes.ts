import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginPageComponent } from './login/login-page.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: HomeComponent},
    { path: 'movie', component: MovieComponent},
    { path: '**', component: LoginPageComponent},
];
