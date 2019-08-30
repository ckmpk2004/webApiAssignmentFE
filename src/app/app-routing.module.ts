import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {HomeComponent} from './home/home.component';
import {GamesComponent} from './games/games.component';
import {LoginComponent} from './login/login.component';
import { AddComponent } from './games/add/add.component';
import { ModifyComponent } from './games/modify/modify.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'games/add', component: AddComponent },
  { path: 'games/modify', component: ModifyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
