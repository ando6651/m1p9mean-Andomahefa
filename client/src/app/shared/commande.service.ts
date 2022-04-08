import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'
import { Commande } from './commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  selectedCommande: Commande = {
    _id: '',
    idplat:'',
    nomplat:'',
    idClient:'',
    clientmail:'',
    date: new Date(),
    etat: ''
  };
  constructor(private http: HttpClient) { }

  //HttpMethods

  getCommandeList() {
    return this.http.get(environment.apiBaseUrl + '/commandelist');
  }
}
