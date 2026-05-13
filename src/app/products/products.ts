import { Component } from '@angular/core';
import { Cards } from "../cards/cards";
import { perfumeData } from '../data';

@Component({
  selector: 'app-products',
  imports: [Cards],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  items = perfumeData
}
