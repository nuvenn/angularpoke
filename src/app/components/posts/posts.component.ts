import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { state } from '@angular/core/src/animation/dsl';
import { DataService } from '../../services/data.service';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts;
  userId: number;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params => this.userId = params['id']);

    this.dataService.getAll('https://jsonplaceholder.typicode.com/posts?userId=' + this.userId).subscribe((posts) => {
      this.posts = posts;
    });

  }

}
