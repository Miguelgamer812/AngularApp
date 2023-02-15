import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private httpNode: HttpClient) { }
  httpNodes(): Observable<any> {
    return this.httpNode.get('http://localhost:3000/galeria')
  }
}

