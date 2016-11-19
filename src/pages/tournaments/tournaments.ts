import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamsPage } from '../pages';

import { EliteAPIService } from '../../shared/shared';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(public navCtrl: NavController,
    public eliteApiService: EliteAPIService,
    public loadingCtrl: LoadingController) {
      console.log("###tournament constructor called");
     }

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage, tournament);
  }

  // presentLoading() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }

  ionViewDidLoad() {
    console.log("###tournament didload called");
    let loader = this.loadingCtrl.create({
      content: 'Getting Tournaments...'
      // duration: 30000
    });
    loader.present();

    this.eliteApiService.getTournaments().then(data => {
      this.tournaments = data;
      loader.dismiss();
    });
    // console.log('##Hello TournamentsPage Page');
  }

  // ionViewWillEnter() {
  //   console.log('##TournamentsPage will enter');
  // }

  // ionViewWillLeave() {
  //   console.log('##TournamentsPage will leave');
  // }

  // ionViewWillUnload() {
  //   console.log('##Bye TournamentsPage Page');
  // }
  // ionViewDidUnload() {
  //   // doesn't work anymore
  //   console.log('##Bye TournamentsPage Page');
  // }




}
