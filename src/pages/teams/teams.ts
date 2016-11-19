import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteAPIService } from '../../shared/shared';
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public eliteApiService: EliteAPIService) { }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }


  ionViewDidLoad() {
    let selectedTournament = this.navParams.data;
    this.eliteApiService.getTournamentData(selectedTournament.id).subscribe(data => {
      this.teams = data.teams;
    });
    
    console.log('Hello TeamsPage Page');
  }

}
