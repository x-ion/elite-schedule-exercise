import '../rxjs-extensions';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { MyTeamsPage, GamePage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage } from '../pages/pages';

import { EliteAPIService } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    
    MyTeamsPage,GamePage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    MyTeamsPage,GamePage, TeamDetailPage, TeamsPage, TournamentsPage, TeamHomePage, StandingsPage
  ],
  providers: [EliteAPIService]
})
export class AppModule {}
