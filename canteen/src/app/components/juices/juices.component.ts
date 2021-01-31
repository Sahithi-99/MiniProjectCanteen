import { Component, OnInit } from '@angular/core';
import {Item} from 'src/app/interfaces/item';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-juices',
  templateUrl: './juices.component.html',
  styleUrls: ['./juices.component.css']
})
export class JuicesComponent implements OnInit {
  juices;
  product:Item[];
  constructor(private data:DataService) { }

  ngOnInit(){
    this.data.getJuices().subscribe(d => {
      this.juices = d;
      this.product = this.juices;
      
    })
  }
  addToCart(index)
  {
    console.log("added",this.product[index]);
  }

}
