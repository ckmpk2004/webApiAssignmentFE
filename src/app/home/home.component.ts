import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private _router: Router) {
  }
  ngOnInit() {
  }
  toGamePage(){
    this._router.navigate(["./games"]);
  }
}