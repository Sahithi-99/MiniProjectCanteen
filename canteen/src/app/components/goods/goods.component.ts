import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Form, NgForm } from '@angular/forms';
import { Item } from 'src/app/interfaces/item.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  add:number = 0;
  
  
  @ViewChild("image") el:ElementRef;
  constructor(private dt:DataService,private st:AngularFireStorage) { }

  ngOnInit(): void {
  }
  
  addBreakfast(form:NgForm)
  {  
    let name = (<Item>form.value).name,
        price = (<Item>form.value).price,
        photo =(<HTMLInputElement>this.el.nativeElement).files[0];
    this.dt.addBreakfast(name,price,photo)
      this.add=1;
  
    this.add=0;
  }
  addLunch(form:NgForm)
  {
    let name = (<Item>form.value).name,
    price = (<Item>form.value).price,
    photo =(<HTMLInputElement>this.el.nativeElement).files[0];
this.dt.addLunch(name,price,photo) 
this.add=1;
this.add=0;
  }
  addCafe(form:NgForm)
  {
    let name = (<Item>form.value).name,
    price = (<Item>form.value).price,
    photo =(<HTMLInputElement>this.el.nativeElement).files[0];
this.dt.addCafe(name,price,photo)
this.add=1;
this.add=0
  }
  addJuice(form:NgForm)
  {
    let name = (<Item>form.value).name,
        price = (<Item>form.value).price,
        photo =(<HTMLInputElement>this.el.nativeElement).files[0];
    this.dt.addJuice(name,price,photo)
    this.add=1;
    this.add=0;
  }
}
