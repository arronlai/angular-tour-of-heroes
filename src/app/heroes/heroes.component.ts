import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import './test.js';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private hotService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
    // functioncallJsFunc();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

  getHeroes(): void {
    // this.heroes = this.hotService.getHeroes();
    this.hotService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
