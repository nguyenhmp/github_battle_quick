import { Component, OnInit } from '@angular/core';
import { GithubService } from "app/github.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  users:any;
  constructor(private _GithubService:GithubService) { 
    _GithubService.get()
    .then((data)=>{
      console.log(data)
      this.users = data
      this.users = this.users.sort((x,y)=>{
        return x.score < y.score
      });
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
