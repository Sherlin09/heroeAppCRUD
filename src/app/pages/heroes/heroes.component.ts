import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor( private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesService.getHeroes()
    .subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
    });
  }
}
