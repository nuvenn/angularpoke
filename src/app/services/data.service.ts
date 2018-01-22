import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('DataService working...');
  }

  getAll(url){
    return this.http.get(url)
      .map(function(res){
        return res.json();  
      });
  }

  postData(url, user){
    return this.http.post(url, user)
      .map(function(res){
        return res.json();  
      });
  }

}
