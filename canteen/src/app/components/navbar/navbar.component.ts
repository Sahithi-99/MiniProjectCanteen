import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser: boolean =false
  isAdmin:boolean=false
  username:string=''
  constructor(private as:AuthService,private router:Router,private us:UserService) { }

  ngOnInit(){
    this.as.user.subscribe(user=>{
       if (user) {
         this.isUser=true;
         this.as.userId=user.uid;
         this.us.getUserdata().subscribe(data=>
          {
            if(data['admin']) this.isAdmin=true
            this.username=data['name']
          }) 
           
         }
         else {
         this.isUser=false;
         this.as.userId=''
        }
      })
  }
  logout()
  {
      this.as.logout().then(()=>console.log("out"))
      this.router.navigate(['/'])
  }

}
