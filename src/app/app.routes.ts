import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { Items } from './items/items';
import { Productdetails } from './productdetails/productdetails';

export const routes: Routes = [
   { path: '' ,component:Home },
   {path :"products",component : Products},
   {path : "contact", component : Contact},
   {path  :"items",component: Items},
   {path : "productdetails/:id", component : Productdetails}
];

