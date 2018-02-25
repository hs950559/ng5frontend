import { Component, OnInit } from '@angular/core';
import { CrudSampleService } from './crud-sample.service';
@Component({
  selector: 'app-crud-sample',
  templateUrl: './crud-sample.component.html',
  styleUrls: ['./crud-sample.component.scss']
})
export class CrudSampleComponent implements OnInit {
  posts;
  constructor(private crudService: CrudSampleService) { }

  ngOnInit() {

  }

  getPosts() {
    this.crudService.getPosts()
      .subscribe((res) => {
         this.posts = res;
      });
  }

  createPost(post){
    this.crudService.createPost(post)
      .subscribe((res) => {
        this.posts.unshift(res);
      });
    console.log(post);
  }

  removePost(post) {

  }
}
