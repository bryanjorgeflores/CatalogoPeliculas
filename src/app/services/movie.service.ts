import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, MovieDetail, CreditsInterface } from '../interfaces/interfaces';

const URL = 'https://api.themoviedb.org/3';
const apiKey = 'f6a943f94bc05541971b7b4e6e40551f';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }
  private executeQuery<T>(query: string,) {
    query = URL + query;
    query += '&language=es&include_image_language=es&api_key=' + apiKey;
    console.log('Query', query);
    return this.http.get<T>(query);
  }

  search(text: string) {
    return this.executeQuery<SearchResponse>('/search/movie?query=' + text);
  }

  getMovieDetails(id: string) {
    return this.executeQuery<MovieDetail>('/movie/' + id + '?a=1');
  }

  getCredits(id:string) {
    return this.executeQuery<CreditsInterface>('/movie/' + id + '/credits?a=1');
  }
}
