import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product:Cart[]=[];
  productObservable:Subscription;
  
  constructor(private cs:CartService) { }

  ngOnInit(){
    this.productObservable=this.cs.getCart().subscribe(data => {
      this.product=data.map(element=>{
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data() as Cart

        }
      })
    })
    console.log(this.product);
  }
  plus(data:Cart)
  {
     //this.inputnumber=this.inputnumber+1;
     //this.price=(this.product[i].price)*(this.inputnumber);
     this.product.find(p=>p.id==data.id).quantity = data.quantity+1;
  }
  minus(data:Cart)
  {
     //if(this.inputnumber != 0)
    //{
      //this.inputnumber=this.inputnumber-1;
      //this.price=(this.product[i].price)*(this.inputnumber);
    //}
    this.product.find(p=>p.id==data.id).quantity = data.quantity-1;
  }
  delete(index)
  {
    this.cs.delete(this.product[index].id)
  }
  save(id)
  {
    this.cs.update(this.product[id].id,this.product[id].quantity)
  }
}
