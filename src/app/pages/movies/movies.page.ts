import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ResulSearchtInterface } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailsPage } from '../movie-details/movie-details.page';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  textSearch = '';
  ideas: string[] =  ['Spiderman', 'Batman', 'Avengers'];
  movies: ResulSearchtInterface[] = [];
  isLoading: boolean = false;

  constructor(
    private movieService: MovieService,
    private modalController: ModalController,
    ) { }

  ngOnInit() { }

  search(event) {
    this.isLoading = true;
    const text = event.detail.value;
    console.log(text);
    if(text){
      this.movieService.search(text).subscribe((resp)=>{
        this.isLoading = false;
        this.movies = resp.results;
        console.log(this.ideas);
      });
    } else {
      this.isLoading = false;
    }
  }

  selectIdea(idea: string){
    this.textSearch = idea;
  }

  async showDetail(id: string) {

    const modal = await this.modalController.create({
      component: MovieDetailsPage,
      componentProps: {
        id
      }
    });

    modal.present();

  }
}
