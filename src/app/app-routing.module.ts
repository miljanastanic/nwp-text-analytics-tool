import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './components/app/app.component';
import { EntityComponent } from './components/entity/entity.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LanguageComponent } from './components/language/language.component';
import { SentimentComponent } from './components/sentiment/sentiment.component';
import { SimilarityComponent } from './components/similarity/similarity.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "entity",
    component: EntityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "similarity",
    component: SimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "language",
    component: LanguageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sentiment",
    component: SentimentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
