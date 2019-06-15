import { Component, OnInit, Input } from '@angular/core';
import { MovieDetail, CreditsInterface } from 'src/app/interfaces/interfaces';
import { MovieService } from 'src/app/services/movie.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  @Input() id;
  movieDetails: MovieDetail;
  credits: CreditsInterface;
  overviewLength = 150;
  slideOption = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }

  constructor(
    private movieService: MovieService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.getDetails();
    this.getCredits();
  }

  getDetails() {
    this.movieService.getMovieDetails(this.id).subscribe((resp: MovieDetail) => {
      this.movieDetails = resp;
      console.log(this.movieDetails);
    });
  }

  getCredits() {
    this.movieService.getCredits(this.id).subscribe((resp: CreditsInterface) => {
      this.credits = resp;
      console.log('Creditos: ', this.credits);
    });
  }

  close() {
    this.modalController.dismiss();
  }

}
