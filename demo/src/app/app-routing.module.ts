import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'hero',
    component: HeroesComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
