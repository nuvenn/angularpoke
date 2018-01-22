import { Component, OnInit } from '@angular/core';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';
import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title: string;
  hobby: string;
  hobbies: string[];
  users: User[];
  userActive: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'User';
    this.hobbies = ['Play music', 'Rowing', 'Programming'];
    this.dataService.getAll('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.users = users;
    });
  }

  putUser(user: User) {
    console.log(user);
    this.dataService.putData('https://jsonplaceholder.typicode.com/posts/' + user.id, user).subscribe((users) => {
     
    });
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    this.hobby = '';
    return false;
  }

  deleteHobby(index) {
    this.hobbies.splice(index, 1);
  }

}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address2,
  phone: string,
  website: string,
  company: Company
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

interface Address2 {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Geo {
  lat: string,
  lng: string
}
