import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './Products/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent], // root App component, belongs to root module
  imports: [BrowserModule], // external module that belong to this module
  bootstrap: [AppComponent] // startup component of Application, it should contain the selector we use
})
export class AppModule { } // identify the ng module by attaching a ngModule decorator
