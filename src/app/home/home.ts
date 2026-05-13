import { Component } from '@angular/core';
import { Caoursel } from "../caoursel/caoursel";
import { Cards } from "../cards/cards";
import { Products } from "../products/products";

@Component({
  selector: 'app-home',
  imports: [Caoursel, Cards, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
