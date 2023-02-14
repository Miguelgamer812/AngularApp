import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  
  Name = "Miguel Arango"
  constructor() {

  }
  ngOnInit(): void {
    console.log("Entrando");
  }

  ngOnDestroy(): void {
    console.log("Saliendo")
  }

}
