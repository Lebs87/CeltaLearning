import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { TableTitlesDirective } from './table-titles.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    TableTitlesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    TableTitlesDirective
  ]
})
export class SharedModule { }
