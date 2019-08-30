import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { AddComponent } from './games/add/add.component';
import { ModifyComponent } from './games/modify/modify.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    GamesComponent,
    AddComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
