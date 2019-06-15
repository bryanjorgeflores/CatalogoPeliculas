import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment'


const url = 'https://image.tmdb.org/t/p/';


@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {


  transform(imagePath: string, size: string = 'w500'): string {
    if (!imagePath) {
      return 'assets/no-image.png'
    }

    const imgUrl = url + size +imagePath;
    return imgUrl;
  }

}

