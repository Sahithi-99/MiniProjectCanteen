import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage:string = ''
  constructor(private as:AuthService,private us:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  signup(form)
  {
    let data:User=form.value
    this.as.signup(data.email,data.password)
    .then(result =>{
      this.errorMessage=''
      this.us.addNewUser(result.user.uid,data.name).then(()=>{
        this.router.navigate(['/'])
      }).catch(err=>console.log('fs',err))
    })
    .catch(err => {
      console.log('a',err)
      this.errorMessage= err.message
    })
  }
}
