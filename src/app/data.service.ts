import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _herokuUrl = 'http://ckmwebapi.herokuapp.com'
  private _getGameUrl = this._herokuUrl+'/games';
  private _addGameUrl = this._herokuUrl+'/games/add';
  private _modifyGameUrl = this._herokuUrl+'/games/modify';
  private _delGameUrl = this._herokuUrl+'/games/delete';
  private _loginUrl =this._herokuUrl+'/login'

  
  
  private _nameStore :string;
  private _descriptionStore :string;
  private _priceStore :number;


  constructor(private http: HttpClient, private _router: Router) { }

  
  httpOptions1 = {headers: new HttpHeaders()};
  httpOptions2 = {headers: new HttpHeaders()};

 

  getGames(){
    this.httpOptions1.headers = this.httpOptions1.headers
    .set('Accept','application/json') 
    .set('Content-type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('X-Requested-With', 'XMLHttpRequest')

    return this.http.get(this._getGameUrl, this.httpOptions1)
  }

  addGame(gameInformation){
    this.httpOptions2.headers = this.httpOptions2.headers
    .set('Accept','application/json') 
    .set('Content-type', 'application/json')
    .set('auth-token',this.getToken())
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('X-Requested-With', 'XMLHttpRequest')

    return this.http.put(this._addGameUrl, gameInformation, this.httpOptions2)
  }

  modifyGame(gameInformation){
    this.httpOptions2.headers = this.httpOptions2.headers
    .set('Accept','application/json') 
    .set('Content-type', 'application/json')
    .set('auth-token',this.getToken())
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('X-Requested-With', 'XMLHttpRequest')

    return this.http.post(this._modifyGameUrl,gameInformation, this.httpOptions2)
  }

  deleteGame(gameName){
    this.httpOptions2.headers = this.httpOptions2.headers
    .set('Accept','application/json') 
    .set('Content-type', 'application/json')
    .set('auth-token',this.getToken())
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('X-Requested-With', 'XMLHttpRequest')
    return this.http.delete(this._delGameUrl+"/"+gameName, this.httpOptions2)
  }

  loginUser(user){
    this.httpOptions1.headers = this.httpOptions1.headers
    .set('Accept','application/json') 
    .set('Content-type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods','GET,POST,OPTIONS,DELETE,PUT')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('X-Requested-With', 'XMLHttpRequest')
    return this.http.post<any>(this._loginUrl, user, this.httpOptions1)
  }

  loggedIn(){
    return !!localStorage.getItem('auth-token')
  } 

  logoutUser(){
    try {
      localStorage.removeItem('auth-token')
      window.alert('You have logged out!')
      this._router.navigate(['../'])
    } catch (error) {
      window.alert('Logout fail, you have not even logged in, how did you do that?')
    }
  }
  getToken(){
    return localStorage.getItem('auth-token')
  }
  
  //Pass game data to modify form
  readyToPassGameData(name, description, price){
    this._nameStore = name;
    this._descriptionStore= description;
    this._priceStore = price;
  }

  //GetPassingData for modification form
  getGameData(){
    return {name:this._nameStore, description:this._descriptionStore, price:this._priceStore}
  }

}
