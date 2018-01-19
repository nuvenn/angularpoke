import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { UsersService } from './services/users.service';
import { AdmComponent } from './components/adm/adm.component';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes = [
  { path: '', component: UserComponent },
  { path: 'adm', component: AdmComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdmComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ DataService, UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
