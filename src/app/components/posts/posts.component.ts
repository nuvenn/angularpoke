import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
