import { Component, OnInit } from '@angular/core';
import { GithubService } from "app/github.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  userName1 = '';
  userName2 = '';
  // users: any = [
  //   { "__v": 0, "login": "nguyenhmp", "id": 12995833, "avatar_url": "https://avatars1.githubusercontent.com/u/12995833?v=3", "public_repos": 33, "followers": 17, "_id": "594aea469412406d7d8455cb" },
  //   { "__v": 0, "login": "eugishuge", "id": 26191712, "avatar_url": "https://avatars3.githubusercontent.com/u/26191712?v=3", "public_repos": 4, "followers": 7, "score": 132, "_id": "594aeae8a8a5c96f7efb654e" }
  // ]
  users:any = [];
  constructor(private _GithubService:GithubService, private _Router:Router) { 
  }

  ngOnInit() {
  }

  findUser(){
    var username = this.userName1 || this.userName2
    console.log(username)
    this.userName1 = ""
    this.userName2 = ""
    this._GithubService.getData(username)
    .then((gitData) => {

      gitData.score = (gitData.followers + gitData.public_repos) * 12
      this._GithubService.createData(gitData)
      .then((dataFromServer)=>{
        this.users.push(dataFromServer)                
      })
      .catch((err)=>{
        console.log(err)
      })


    })
    .catch((err)=>{
      console.log(err)
    })
  }
  battle(user1, user2){
    console.log("here")
    this._GithubService.setData(user1, user2)
    this._Router.navigateByUrl('/result')
  }
}
