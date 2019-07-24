import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data.slice(1,5);
    })
  }
}
