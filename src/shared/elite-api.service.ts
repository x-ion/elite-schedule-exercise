import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

// import 'rxjs';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteAPIService {

    private baseUrl = "https://tryout-7671a.firebaseio.com";

    currentTournament: any = {};

    constructor(private http: Http) { }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        })
    }

    getTournamentData(tournament_id): Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments-data/${tournament_id}.json`)
            .map((response: Response) => {
                this.currentTournament = response.json();
                return this.currentTournament;
            })
    }

    getCurrentTournament(){
        // console.log("####currentTournament: " + this.currentTournament);
        
        return this.currentTournament;
    }
}