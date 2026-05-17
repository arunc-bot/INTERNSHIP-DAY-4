import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-itemcard',
  imports: [RouterLink],
  templateUrl: './itemcard.html',
  styleUrl: './itemcard.css',
})
export class Itemcard {
  @Input() Item :any;
}
