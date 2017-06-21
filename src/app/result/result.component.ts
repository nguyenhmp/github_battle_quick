import { Component, OnInit } from '@angular/core';
import { GithubService } from "app/github.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  users = [];
  winner:any;
  loser:any;
  constructor(private _GithubService:GithubService) {
    if(this._GithubService.user1.score > this._GithubService.user2.score){
      this.winner = this._GithubService.user1
      this.loser = this._GithubService.user2
    }else{
      this.winner = this._GithubService.user2
      this.loser = this._GithubService.user1      
    }
  }

  ngOnInit() {
  }
  reset(){
    this._GithubService.reset();
  }
}
