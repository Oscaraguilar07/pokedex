import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detapokemon',
  templateUrl: './detapokemon.page.html',
  styleUrls: ['./detapokemon.page.scss'],
})
export class DetapokemonPage implements OnInit {

  detapoke: any = [];

  name:string='';
  id:string='';
  imageurl:string='';
  xdescription:string='';
  category:string='';

  evolutions:string='';

  hp:string='';
  attack:string='';
  defense:string='';
  special_attack:string='';
  special_defense:string='';
  speed:string='';
  total:string='';

  base_exp:string='';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.detapoke = localStorage.getItem('detallePokemon');
    this.detapoke = JSON.parse(this.detapoke);

    this.name=this.detapoke.name;
    this.id=this.detapoke.id;
    this.imageurl=this.detapoke.imageurl;
    this.xdescription=this.detapoke.xdescription;
    this.category=this.detapoke.category;

    this.evolutions=this.detapoke.evolutions;

    this.hp=this.detapoke.hp;
    this.attack=this.detapoke.attack;
    this.defense=this.detapoke.defense;
    this.special_attack=this.detapoke.special_attack;
    this.special_defense=this.detapoke.special_defense;
    this.speed=this.detapoke.speed;
    this.total=this.detapoke.total;


    console.log("detalle pokemon", this.detapoke)

  }

}
