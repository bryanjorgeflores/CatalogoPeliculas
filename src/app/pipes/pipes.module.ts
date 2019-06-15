import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPipe } from './images.pipe';
import { PairsPipe } from './pairs.pipe';
import { NoImagePipe } from './no-image.pipe';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [ImagesPipe, PairsPipe, NoImagePipe, TestPipe],
  exports: [ImagesPipe, PairsPipe, NoImagePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
