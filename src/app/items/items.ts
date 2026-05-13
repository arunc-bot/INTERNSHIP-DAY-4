import { ChangeDetectorRef, Component } from '@angular/core';
import { Itemcard } from "../itemcard/itemcard";
import { Serviceapi } from '../serviceapi';

@Component({
  selector: 'app-items',
  imports: [Itemcard],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  data:any[]=[];
  constructor(private serviceapi:Serviceapi,private cdr:ChangeDetectorRef){}

  ngOnInit(){
this.serviceapi.getFakestoreItems().subscribe((res:any)=>{
  this.data=res;
  this.cdr.detectChanges();
})
}

}

