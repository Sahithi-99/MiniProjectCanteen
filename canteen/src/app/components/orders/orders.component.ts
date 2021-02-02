import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/interfaces/order.interface';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  product:Order[]=[]
  productObservable:Subscription;
  constructor(private os:OrderService) { }

  ngOnInit() {
    this.productObservable=this.os.getOrders().subscribe(data => {
      this.product=data.map(element=>{
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data() as Order

        }
      })
    })
    console.log(this.product);

  }

}
