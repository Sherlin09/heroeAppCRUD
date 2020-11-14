import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
  }

  guardar(form: NgForm){

    if (form.invalid) {  
      console.log('Formulario no valido');
      return;
    }

    this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => {
        console.log(resp);
        
      });

}
}
