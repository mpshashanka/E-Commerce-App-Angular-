import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  public cartitems:number=0;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems=res.length;
    })
   
  }

}
