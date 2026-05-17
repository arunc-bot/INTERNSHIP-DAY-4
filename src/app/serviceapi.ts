import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceapi {
  constructor (private http:HttpClient) {}
  
  getPerfumeItems(){
    return this.http.get("https://dummyjson.com/products/category/fragrances?limit=100");
  }
  getPerfumeItemsById(id:any){
    return this.http.get(`https://dummyjson.com/products/category/fragrances?limit=100/${id}`)
  }
}
