import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newGameData = {};
  
  constructor(private _data: DataService,private _router: Router) { }

  addGameForm = new FormGroup({
  name: new FormControl(''),
  description: new FormControl(''),
  price: new FormControl(''),
  });

  ngOnInit() {
  }

  addGame(){
    console.log(this.newGameData);
    this._data.addGame(this.newGameData).subscribe(
      res => {
        console.log(res)
        this._router.navigate(['../games'])
        window.alert("New game added to database!")
      },
      err => {
        console.log(err);
        window.alert(err.error);
      }
    )
  }

  BackToPrePage(){
    this._router.navigate(['../games'])
  }
}
