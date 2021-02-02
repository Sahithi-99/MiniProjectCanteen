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
  addBreakfast(name: string, price: Number, photo: File)
  {
    let ref=this.storage.ref('breakfast/' + photo.name)
    ref.put(photo).then(()=>{
      ref.getDownloadURL().subscribe(image =>{
       this.fs.collection('breakfast').add(
          {
            name,
            price,
            image
          })
      })
    })
  }
  addCafe(name:string,price:Number,photo:File)
  {
    let ref=this.storage.ref('beverages/' + photo.name)
    ref.put(photo).then(()=>{
      ref.getDownloadURL().subscribe(image =>{
        this.fs.collection('beverages').add(
          {
            name,
            price,
            image
          })
      })
    })
  }
  addLunch(name:string, price: Number,photo:File)
  {
    let ref=this.storage.ref('lunch/' + photo.name)
    ref.put(photo).then(()=>{
      ref.getDownloadURL().subscribe(image =>{
        this.fs.collection('lunch').add(
          {
            name,
            price,
            image
          })
      })
    })
  }
  addJuice(name:string,price:Number,photo:File)
  {
    let ref=this.storage.ref('juices/' + photo.name)
    ref.put(photo).then(()=>{
      ref.getDownloadURL().subscribe(image =>{
        this.fs.collection('juices').add(
          {
            name,
            price,
            image
          })
      })
    })
  }
}
