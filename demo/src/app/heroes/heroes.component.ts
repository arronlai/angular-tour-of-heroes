import { Component, OnInit } from '@angular/core';
import { heroes, heroes2 } from './Heroes';
import { Hero } from './Hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = heroes;
  heroes2 = heroes2;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

    // Different way to initialize object
    console.log(this.heroes[0] instanceof Hero);
    console.log(this.heroes2[0] instanceof Hero);
  }

  handleClick(hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
