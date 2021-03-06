import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudSampleComponent } from './crud-sample/crud-sample.component';
import { CrudSampleService } from './crud-sample/crud-sample.service';
import { EditPostComponent } from './crud-sample/edit-post/edit-post.component';
import { AppErrorHandler } from '../app-error-handler';

@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [CrudSampleComponent, EditPostComponent],
  providers: [CrudSampleService, {provide: ErrorHandler, useClass: AppErrorHandler}]
})
export class CrudModule { }
