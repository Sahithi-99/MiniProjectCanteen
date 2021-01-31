import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfast;
  product:Item[];
  constructor(private data:DataService) { }

  ngOnInit(){
    this.data.getBreakfast().subscribe(d => {
      this.breakfast = d;
      this.product = this.breakfast;
      
    })
  }
  addToCart(index)
  {
    console.log("added",this.product[index]);
  }
}


