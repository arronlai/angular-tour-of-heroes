import { Injectable } from '@angular/core';
import { heroes } from './heroes/Heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/Hero';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('Fetch heroes:' + new Date());
    return of(heroes);
  }

  getHero(id: number) {
    this.messageService.add('Fetch hero with id: ' + id + ' ' + new Date())
    return of(heroes.find(d => d.id === id))
  }
}
