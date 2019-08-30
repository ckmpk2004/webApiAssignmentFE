import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private _auth: DataService,private _router: Router) { }


  canActivate(): boolean{
    if(this._auth.loggedIn()){
      return true;
    }else{
      return false;
    }
  }
  
}
