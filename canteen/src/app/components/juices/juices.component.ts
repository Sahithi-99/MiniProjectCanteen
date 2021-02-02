import { Component, OnDestroy, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import {Item} from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-juices',
  templateUrl: './juices.component.html',
  styleUrls: ['./juices.component.css']
})
export class JuicesComponent implements OnInit,OnDestroy {
  product:Item[]=[]
  productObservable:Subscription
  add:number=-1
  constructor(private dt:DataService,private cs:CartService) { }

  ngOnInit(){
    this.productObservable=this.dt.getJuices().subscribe(data => {
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


}
