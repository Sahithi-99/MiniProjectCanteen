import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore,private as:AuthService) { }
  addNewUser(id,name)
  {
    return this.fs.doc('users/' + id).set({
      name
    })
  }
  getUserdata()
  {
    return this.fs.doc('users/' +  this.as.userId).valueChanges()
  }
}
