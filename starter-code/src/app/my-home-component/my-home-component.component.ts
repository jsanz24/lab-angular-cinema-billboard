import { Component } from '@angular/core';
import { MoviesService } from 'app/movies.service';
import { IMovie } from 'app/i-movie';
@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers:[MoviesService]
})
export class MyHomeComponentComponent {
  movies:Array<IMovie>
  
  constructor(private moviesService: MoviesService) { 
    this.movies = this.moviesService.getMovies()
  }


}
