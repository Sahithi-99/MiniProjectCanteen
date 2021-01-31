import { Component, OnInit } from '@angular/core';
import {Item} from 'src/app/interfaces/item';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  lunch;
  product:Item[];
  constructor(private data:DataService) { }

  ngOnInit(){
    this.data.getLunch().subscribe(d => {
      this.lunch = d;
      this.product = this.lunch;
      
    })
  }
  addToCart(index)
  {
    console.log("added",this.product[index]);
  }

}
