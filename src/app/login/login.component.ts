import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}


  constructor(private _auth: DataService,private _router: Router) { }

  loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  });


  ngOnInit() {
  }


  loginUser(){
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('auth-token', res.token)
        this._router.navigate(['./games'])
        window.alert("Login Successfully! Welcome Back!")
      },
      err => {
        console.log(err);
        window.alert(err.error);
      }
    )
  }
}
