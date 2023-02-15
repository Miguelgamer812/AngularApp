import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  
  pojemon:any;
  Name = "Miguel Arango"
  constructor(private indexService:IndexService) {

  }

  ngOnInit(): void {
    this.indexService.getPokemons().subscribe(data => {
      this.pojemon = data.results;
    });
    console.log("Entrando");
  }

  ngOnDestroy(): void {
    console.log("Saliendo")
  }

}
