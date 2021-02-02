import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private fs:AngularFirestore,private as:AuthService) { }
  
  addToCart(data:Item)
  {
   return this.fs.collection('users').doc(this.as.userId).collection('cart').add(data)
  }
  getCart()
  {
    return this.fs.collection('users').doc(this.as.userId).collection('cart').snapshotChanges()
  }
  delete(id)
  {
    return this.fs.collection('users').doc(this.as.userId).collection('cart').doc(id).delete()
  }
  update(id,quantity)
  {
    return this.fs.collection('users').doc(this.as.userId).collection('cart').doc(id).update({
      quantity
    })
  }
}
