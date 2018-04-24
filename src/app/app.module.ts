import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { PokeComponent } from './components/poke/poke.component';
import { DataService } from './services/data.service';
import { DetailsComponent } from './components/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes = [
  { path: '', component: PokeComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PokeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
