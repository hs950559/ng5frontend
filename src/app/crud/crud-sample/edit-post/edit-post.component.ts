import { Component, OnInit } from '@angular/core';
import { CrudSampleService } from '../crud-sample.service';

@Component({
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  post: any = {
    id: 1,
    title: 'Sample Title',
    body: 'Sample Body'
  };

  constructor(private crudService: CrudSampleService) { }

  ngOnInit() {
  }

  updatePost(post) {
    this.crudService.update({id: this.post.id, title: 'I am kool'})
      .subscribe((res) => {
          this.post = res;
      });
  }
}
