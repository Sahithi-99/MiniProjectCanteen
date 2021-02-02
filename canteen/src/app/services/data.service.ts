import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Item } from '../interfaces/item.interface';
//import {Item} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fs:AngularFirestore,private storage:AngularFireStorage) { }
  getBreakfast()
  {
    return this.fs.collection('breakfast').snapshotChanges();
  }
  getLunch()
  {
    return this.fs.collection('lunch').snapshotChanges();
  }
  getJuices()
  {
    return this.fs.collection('juices').snapshotChanges();
  }
  getCafe()
  {
    return this.fs.collection('beverages').snapshotChanges();
  }
  addBreakfast(data:Item)
  {

    return this.fs.collection('breakfast').add(data)
  }
  addCafe(name:string,price:Number,image:File)
  {
    let ref=this.storage.ref('beverages/' + image.name)
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(image =>
        {
          this.fs.collection('beverages').add({
            name,
            price,
            image
          })
        })
    })
  }
  addLunch(name:string, price: Number,image:File)
  {
    let ref=this.storage.ref('lunch/' + image.name)
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(image =>
        {
          this.fs.collection('lunch').add({
            name,
            price,
            image
          })
        })
    })
  }
  addJuice(name:string,price:Number,image:File)
  {
    let ref=this.storage.ref('juices/' + image.name)
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(image =>
        {
          this.fs.collection('juices').add({
            name,
            price,
            image
          })
        })
    })
  }
}
