import { Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms'; 

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  modifiedGameData = {};

  constructor(private _data: DataService,private _router: Router) { }

  ModifyGameForm = new FormGroup({
    newName: new FormControl(''),
    newDescription: new FormControl(''),
    newPrice: new FormControl(''),
    });


  ngOnInit() {

    const passedData = this._data.getGameData();
    console.log(passedData);

    this.modifiedGameData ={
      name:passedData.name,
      newName:passedData.name, 
      newDescription:passedData.description,
      newPrice: passedData.price}
  }

  ModifyGame(){
    console.log(this.modifiedGameData);
    this._data.modifyGame(this.modifiedGameData).subscribe(
      res => {
        console.log(res)
        this._router.navigate(['../games'])
        window.alert("Game informations' modification completed")
      },
      err => {
        console.log(err);
        window.alert(err.error);
      }
    )
  }

  //Back to previous page
  BackToPrePage(){
    this._router.navigate(['../games'])
  }
}
