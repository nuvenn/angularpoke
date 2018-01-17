import { Component, OnInit } from '@angular/core';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';

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
  posts: Posts;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Users';
    this.name = '';
    this.hobbies = ['Play music', 'Rowing', 'Programming'];
    this.address = {
      street: '',
      city: '',
      state: ''
    }
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
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

interface Address {
  street: string,
  city: string,
  state: string
}

interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}
