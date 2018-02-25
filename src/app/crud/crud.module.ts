import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudSampleComponent } from './crud-sample/crud-sample.component';
import { CrudSampleService } from './crud-sample/crud-sample.service';

@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule
  ],
  declarations: [CrudSampleComponent],
  providers: [CrudSampleService]
})
export class CrudModule { }
