import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  appTitle = 'Doggie Gaming';
  
  constructor(private _authService: DataService) { }

  ngOnInit() {
  }

}
