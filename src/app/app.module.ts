import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent }  from './app.component';
import {ProductComponent} from './products/product.componant';
import {FilterPipe} from './products/filter.pipe';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
  ],
  declarations: [
      FilterPipe,
      AppComponent,
      ProductComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
