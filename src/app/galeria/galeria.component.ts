import { Component,OnInit,OnDestroy } from '@angular/core';
import { GaleriaService } from '../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor(private galeriaService:GaleriaService){
  }//Contructor hace que antes que cargues el componente haga lo que tu le pones dentro.
  ngOnInit():void {
    this.galeriaService.httpNodes().subscribe(cualquiercosa => {console.log(cualquiercosa)})
  }
}
