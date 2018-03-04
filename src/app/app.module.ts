import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormatInputDirective } from './format-input.directive';
import { AuthService } from './auth/auth.service';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtOptionsFactory } from './auth/token.service';
import { AuthGuard } from './services/auth-guard';
import { AdminAuthGuard } from './admin/admin-auth.guard';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatInputDirective,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      },
      config: {
        skipWhenExpired: true
      }
    })
  ],
  providers: [ AuthService, AuthGuard, AdminAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
