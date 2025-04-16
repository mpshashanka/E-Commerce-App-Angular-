import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productdata:any|product;
  showadd:boolean= true;
  showremove:boolean= false;
  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid=this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is",productid)
    productid && this.api.getProductbyid(productid).subscribe((res)=>{
      this.productdata= res;
      console.log (res)
    }
  )
  }
  addtocart(productdata:product) {
  this.showadd=false;
  this.showremove=true;
  this.api.addtocart(productdata)
  }
  removeitem(productdata:product) {
    this.showadd=true;
    this.showremove=false;
    this.api.removecartitem(productdata)
  }

}
