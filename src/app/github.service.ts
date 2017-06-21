import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs'

@Injectable()
export class GithubService {
  user1:any;
  user2:any;
  constructor(private _Http:Http) { }

  getData(userName){
    return this._Http.get(`https://api.github.com/users/${userName}`)
    .map((data)=>{
      return data.json()
    }).toPromise();
  }
  createData(user){
    return this._Http.post('/users', user)
    .map((data)=>{
      return data.json()
    }).toPromise();
  }
  setData(user1, user2){
    this.user1 = user1
    this.user2 = user2   
  }
  // getTwo(){
  //   return this._Http.get(`/users/${this.userName1}/${this.userName2}`)
  //   .map((res)=>{
  //     return res.json()
  //   })
  //   .toPromise();
  // }
  reset(){
    this.user1 = null;
    this.user2 = null;

  }
  get(){
    return this._Http.get('/users')
    .map((data)=>{
      return data.json()
    }).toPromise();
  }
}
