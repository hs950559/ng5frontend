import { Component, OnInit } from '@angular/core';
import { SecretService } from './secret.service';
@Component({
  template: `
    <h1 class="display-1">Secret Resource</h1>
    <p>Backend API response is <span class="text-success">{{ secret }}</span></p>
  `
})

export class SecretComponent implements OnInit {
  secret: string;
  constructor(private secretService: SecretService) { }

  ngOnInit() {
    this.secretService.getAll()
      .subscribe((res: any) => {
        this.secret = res.secret;
      });
  }
}
