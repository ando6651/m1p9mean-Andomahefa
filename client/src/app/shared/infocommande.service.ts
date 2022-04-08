import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Infocommande } from './infocommande.model';

@Injectable({
  providedIn: 'root'
})
export class InfocommandeService {
  selectedInfocommande: Infocommande = {
    _id: '',
    idplat: '',
    idrestau: '',
    benefice: 0,
    date: new Date()
  };
  constructor(private http: HttpClient) { }

  //HttpMethods

  getInfoCommandeList() {
    return this.http.get(environment.apiBaseUrl + '/infocommandelist');
  }

}
