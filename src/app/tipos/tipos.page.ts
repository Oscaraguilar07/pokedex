import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {
  listtipos: any[]=[];

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('../../assets/Pokemones/pokemones.json').subscribe(data => {
      this.listtipos = JSON.parse(JSON.stringify(data))[0].tipos.categorys;


      
    });
  }

}
