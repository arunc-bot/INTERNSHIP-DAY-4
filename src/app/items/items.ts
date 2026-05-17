import { ChangeDetectorRef, Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itemcard } from "../itemcard/itemcard";
import { Serviceapi } from '../serviceapi';

@Component({
  selector: 'app-items',
  imports: [CommonModule, Itemcard],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items implements OnInit {
  data:any[]=[];
  constructor(private serviceapi:Serviceapi,private cdr:ChangeDetectorRef){}

  ngOnInit(): void {
this.serviceapi.getPerfumeItems().subscribe((res:any)=>{
  this.data=[...res.products,...res.products,...res.products,...res.products,...res.products,...res.products,...res.products,...res.products,...res.products,...res.products];
  this.cdr.detectChanges();
})
}

}

