import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from '../product-view/productmodal';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-cart-page',
  standalone: false,
  
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  showproduct:any=[];
  public totalamount: number=0;
  public addressform=false;
  myform:FormGroup|any;
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
   this.api.products().subscribe(res=>{
    this.showproduct= res;
    this.totalamount=this.api.calculateprice();
    console.log("total amount price is:" ,this.totalamount)
   })
   //form
   this.myform=new FormGroup({
email: new FormControl ('', Validators.required ),
name: new FormControl ('', Validators.required ),
mobile : new FormControl ('', Validators.required ),
address: new FormControl ('', Validators.required ),
  })
  }
  deleteitem(item:product){
    this.api.removecartitem(item)

  }
  Empty(){
    this.api.removeallitem();
  }
  cancel(){
    this.addressform=false;
    this.myform.reset();
  }
  onsubmit(){
  this.myform.value;
  console.log(this.myform.value);
  this.myform.reset();
}
}
