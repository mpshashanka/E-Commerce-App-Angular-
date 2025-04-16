import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { response } from 'express';
import { product } from './productmodal';

@Component({
  selector: 'app-product-view',
  standalone: false,
  
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  data!: any|product[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.displayProduct();
  }
displayProduct(){
  this.api.getProduct().subscribe(res=>{
this.data =res;
console.log(res)
  })
}
addtocart(item:product){
this.api.addtocart(item);
}

removeitem(item:product){
this.api.removecartitem(item);
}
}
