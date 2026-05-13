import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceapi {
  constructor (private http:HttpClient) {}
  
  getFakestoreItems(){
    return this.http.get("https://fakeapi.example.com/api/v1/perfumes/:id")
  }
}
