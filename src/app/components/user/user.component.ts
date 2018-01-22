import { Component, OnInit } from '@angular/core';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';
import { Address } from '../../interfaces/address';
import { NotificationsService, SimpleNotificationsComponent, Options} from 'angular2-notifications';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  userActive: {};
  userShow: boolean;

  constructor(private dataService: DataService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.userShow = false;
    this.userActive = {};
    this.dataService.getAll('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.users = users;
    });
  }

  putUser(user: User) {
    if(user.name && user.email){
      this.dataService.putData('https://jsonplaceholder.typicode.com/users/' + user.id, user).subscribe((users) => {
        this.notificationService.success('Success update', null, null); 
      });
    }
  }

  setClickedRow(user) {
    this.userActive = user;
    this.userShow = true;
  }

  deleteUser(index, user) {   
    this.dataService.deleteData('https://jsonplaceholder.typicode.com/posts/' + user.id).subscribe((users) => {
      this.notificationService.success('Success delete', null, null);
      this.users.splice(index, 1); 
      this.userActive = {};
    });
  }

  clearFields() {   
    this.userActive = {};
  }

}
