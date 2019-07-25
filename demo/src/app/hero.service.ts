import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Hero} from './heroes/Hero';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})
export class HeroService {
    private heroesUrl = 'api/heroes'; // URL to web api

    constructor(private messageService : MessageService, private http : HttpClient) {}

    log(msg) {
        this
            .messageService
            .add(msg);
    }

    getHeroes() {
      this.log('Fetch heroes:' + new Date());
      return this.http.get < Hero[] > (this.heroesUrl).pipe(tap(_ => this.log('fetched heroes')), catchError(this.handleError < Hero[] > ('getHeroes', [])));
    }

    getHero(id : number) {
        this.log('Fetch hero with id: ' + id + ' ' + new Date());
        return this.http.get <Hero> (`${this.heroesUrl}/${id}`).pipe(
          tap(_ => this.log('fetch hero with id' + id)),
          catchError(this.handleError <Hero>('getHero'))
        );
    }

    updatateHero(hero: Hero) {
      this.log('Update hero with id: ' + hero.id + ' ' + new Date());
      return this.http.put(`${this.heroesUrl}`, hero, httpOptions).pipe(
        tap(_ => this.log('update hero with id: ' + hero.id)),
        catchError(this.handleError<any>('updateHero'))
      );
    }

    private handleError < T > (operation = 'operation', result?: T) {
        return(error : any): Observable < T > => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
