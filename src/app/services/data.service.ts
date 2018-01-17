import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('DataService working...');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(function(res){
        return res.json();  
      });
  }

}
