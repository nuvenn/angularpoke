import { Component, OnInit } from '@angular/core';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';
import { Address } from '../../interfaces/address';
import { NotificationsService, SimpleNotificationsComponent, Options} from 'angular2-notifications';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  hobby: string;
  hobbies: string[];
  users: User[];
  userActive: {};
  userShow: boolean;

  constructor(private dataService: DataService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.userShow = false;
    this.userActive = {};
    this.hobbies = ['Play music', 'Rowing', 'Programming'];
    this.dataService.getAll('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.users = users;
    });
  }

  putUser(user: User) {
    this.dataService.putData('https://jsonplaceholder.typicode.com/posts/' + user.id, user).subscribe((users) => {
      this.notificationService.success('Success update', null, {id: 123}); 
    });
  }

  setClickedRow(user) {
    this.userActive = user;
    this.userShow = true;
  }

  deleteUser(index, user) {   
    this.dataService.deleteData('https://jsonplaceholder.typicode.com/posts/' + user.id).subscribe((users) => {
      this.notificationService.success('Success delete', null, {id: 123});
      this.users.splice(index, 1); 
      this.userActive = {};
    });
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
