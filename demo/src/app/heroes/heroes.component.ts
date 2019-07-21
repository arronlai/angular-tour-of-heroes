import { Component, OnInit } from '@angular/core';
import { heroes, heroes2 } from './Heroes';
import { Hero } from './Hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  heroes2 = heroes2;
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();

    // Different way to initialize object
    console.log(this.heroes[0] instanceof Hero);
    console.log(this.heroes2[0] instanceof Hero);
  }

  handleClick(hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    });
  }

}
