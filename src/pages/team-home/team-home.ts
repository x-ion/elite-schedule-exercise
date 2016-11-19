import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage, StandingsPage, TeamDetailPage } from '../pages';

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  team : any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
      this.team = this.navParams.data;

   }

  goHome(){
    this.navCtrl.popToRoot();
  }


  // ionViewDidLoad() {
  //   console.log('Hello TeamHomePage Page');
  // }

}
