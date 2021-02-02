import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private fs:AngularFirestore,private as:AuthService) { }
  getOrders()
  {
    return this.fs.collection('users').doc(this.as.userId).collection('orders').snapshotChanges()
  }
}
