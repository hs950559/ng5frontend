import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubFollowerRoutingModule } from './github-follower-routing.module';
import { GithubFollowerComponent } from './github-follower.component';
import { GithubFollowerService } from './github-follower.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MyHttpInterceptor } from '../services/http.interceptor';

@NgModule({
  imports: [
    CommonModule,
    GithubFollowerRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [GithubFollowerComponent, ProfileComponent],
  providers: [GithubFollowerService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
  }]
})
export class GithubFollowerModule { }
