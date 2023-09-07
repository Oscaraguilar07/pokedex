import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listPokemones : any[]=[];


  constructor(
    public http: HttpClient,
    public route: Router
  ) { }

  ngOnInit() {

    this.http.get('../../assets/Pokemones/pokemones.json').subscribe(data => {
      this.listPokemones = JSON.parse(JSON.stringify(data))[0].detallePokemon;


      
    });
  }

  Navigate(value:any){

    this.route.navigate(['detapokemon'])
    localStorage.setItem('detallePokemon', JSON.stringify(value))



    
  }

}
