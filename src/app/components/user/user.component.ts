import { Component, OnInit } from '@angular/core';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';
import { UsersService } from '../../services/users.service';
import { Address } from '../../interfaces/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title: string;
  name: string;
  email: string;
  age: number;
  address: Address;
  hobby: string;
  hobbies: string[];
  users: User[];
  userActive: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.title = 'User';
    this.name = '';
    this.hobbies = ['Play music', 'Rowing', 'Programming'];
    this.address = {
      street: '',
      city: '',
      state: ''
    }
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
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
