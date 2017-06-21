import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from "app/battle/battle.component";
import { ResultComponent } from "app/result/result.component";
import { RankingComponent } from "app/ranking/ranking.component";

const routes: Routes = [
  {
    path: '',
    children: [],
    component: BattleComponent
  },
  {
    path:'result',
    component: ResultComponent
  },
  {
    path:'ranking',
    component: RankingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
