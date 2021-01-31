import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Item} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getBreakfast()
  {
    return this.http.get('../assets/breakfast.json');
  }
  getLunch()
  {
    return this.http.get('../assets/lunch.json');
  }
  getJuices()
  {
    return this.http.get('../assets/juices.json');
  }
  getCafe()
  {
    return this.http.get('../assets/beverages.json');
  }
}
