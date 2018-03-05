import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SecretComponent } from './secret.component';
import { SecretService } from './secret.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [ SecretService ],
  declarations: [AdminComponent, SecretComponent]
})
export class AdminModule { }
