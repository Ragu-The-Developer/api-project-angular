import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, CommonModule, NgbRatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    trendingMovies: any;
    theatreMovies: any;
   

  constructor(private http: HttpClient) { }

   ngOnInit(): void {

          this.getTrendingMovies();
          this.getTheatreMovies();
  
   }

   

   

  getTrendingMovies()
  {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
     });
  }

  getTheatreMovies()
  {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
      this.theatreMovies = movies;
     });
  }


}
