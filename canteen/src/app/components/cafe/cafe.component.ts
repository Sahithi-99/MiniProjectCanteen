import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit,OnDestroy {
  product:Item[]=[]
  productObseravble:Subscription
  add:number=-1
  constructor(private dt:DataService,private cs:CartService,private as:AuthService,private router:Router) { }

  ngOnInit(){
    this.productObseravble=this.dt.getCafe().subscribe(data => {
      this.product=data.map(element=>{
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data() as Item

        }
      })
    })
  }
  ngOnDestroy()
  {
    this.productObseravble.unsubscribe()
  }
  addToCart(index:number)
  {
    if(this.as.userId){
      this.add=+index;
      let selectedItem = this.product[this.add];
      let data = {
         name : selectedItem.name,
         quantity :+1,
         price:selectedItem.price,
         image:selectedItem.image
         
      }
      this.cs.addToCart(data).then(()=> this.add = -1)
    }
    else this.router.navigate(['/login']);
  }

}
