import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit,OnDestroy {
  product: Item[] = []
  productObservable:Subscription;
  add:number =-1
  constructor(private dt:DataService,private cs:CartService,private as:AuthService,private router:Router) { }

  ngOnInit(){
    this.productObservable=this.dt.getBreakfast().subscribe(data => {
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
    this.productObservable.unsubscribe()
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