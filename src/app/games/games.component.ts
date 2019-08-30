import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Object;

  constructor(private data: DataService, private _router: Router) { }

  ngOnInit() {
    
    this.data.getGames().subscribe(data=>{
      this.games = data;
      console.log(this.games);
    })
  }
  //Route to add game page
  toAddGamePage(){
    this._router.navigate(['./games/add'])
  }

  //Route to modify page
  toModifyGamePage(){
    this._router.navigate(['./games/modify'])
  }
  //Pass original game data to modify form
  passDataToForm(name, description, price){
    this.data.readyToPassGameData(name, description, price )
  }
  modification(name, description, price){
    this.toModifyGamePage();
    this.passDataToForm(name, description, price);
  }

  
  //Delete game from database
  deleteGame(gameName){
    console.log(gameName);
    this.data.deleteGame(gameName).subscribe(
      res => {
        console.log(res)
        this.refreshPage();
        window.alert("Game information deleted!")
      },
      err => {
        console.log(err);
        window.alert(err.error);
      }
    )
  }
    
  refreshPage(){
  this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  this._router.onSameUrlNavigation = 'reload';
  this._router.navigate(['/games']);
  }

  originGameName = "game.name"
}
