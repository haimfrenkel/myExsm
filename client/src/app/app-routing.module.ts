import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
 {path: "", component: HomePageComponent},
 {path: "game", component: GameComponent},
 {path: "history", component: HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
