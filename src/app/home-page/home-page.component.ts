import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  constructor (private post:PostsService){}
  ngOnInit(): void {
    this.post.crestePost().subscribe((res) => {
      console.log(res);
    })
  }
}
