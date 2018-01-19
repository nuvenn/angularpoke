import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {

  constructor(public http: Http) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(function(res){
        return res.json();  
      });
  }

}
