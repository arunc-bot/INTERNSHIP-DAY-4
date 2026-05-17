import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serviceapi } from '../serviceapi';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  product:any;

  constructor( private api:Serviceapi,private cdr:ChangeDetectorRef,private route: ActivatedRoute ){}

  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id){   
    this.api.getPerfumeItemsById(id).subscribe((res:any)=>{
      this.product = res;
      this.cdr.detectChanges();
    });
  }

}
}
