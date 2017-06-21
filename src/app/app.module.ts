import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { GithubService } from "app/github.service";
import { ResultComponent } from './result/result.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    ResultComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
