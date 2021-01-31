import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  breakfast;
  product:Item[];
  constructor(private data:DataService) { }

  ngOnInit(){
    this.data.getCafe().subscribe(d => {
      this.breakfast = d;
      this.product = this.breakfast;
      
    })
  }
  addToCart(index)
  {
    console.log("added",this.product[index]);
  }

}
