import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Plat } from './plat.model';
@Injectable({
  providedIn: 'root'
})
export class PlatService {
  selectedPlat: Plat = {
    _id: '',
    nom: '',
    idrestau: '',
    prix: 0,
    prixvente: 0,
    visible: true
  };
  constructor(private http: HttpClient) { }

  //HttpMethods

  getPlatList() {
    return this.http.get(environment.apiBaseUrl + '/platlist');
  }

}
