import { ConditionalExpr } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Form, NgForm } from '@angular/forms';
import { Item } from 'src/app/interfaces/item.interface';
import { DataService } from 'src/app/services/data.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  add:number = 0;
  
  filepath:string=''
  imagePath:string=''
  imageURL:string=''
  pathtoadd:string=''
  constructor(private dt:DataService,private st:AngularFireStorage) { }

  ngOnInit(): void {
  }
  uploadB($event)
  {
     this.filepath=$event.target.files[0];
     console.log(this.filepath);
  }
  uploadBImage()
  {
      this.pathtoadd="/breakfast"+Math.random()+this.filepath
      this.st.upload(this.pathtoadd,this.filepath)
      console.log("abcd")
      const fileref=this.st.ref(this.filepath)
      fileref.getDownloadURL().subscribe((url)=>{
        this.imageURL=url
      })
      console.log(this.imageURL)
  }
  uploadC($event)
  {

  }
  uploadCImage()
  {

  }
  uploadJ($event)
  {

  }
  uploadJImage()
  {

  }
  uploadL($event)
  {

  }
  uploadLImage()
  {

  }

  addBreakfast(form)
  {  
    let data:Item=form.value
    data.image=this.imageURL;
    this.dt.addBreakfast(data)
  }
  addLunch(form:NgForm)
  {
       
  }
  addCafe(form:NgForm)
  {
      
  }
  addJuice(form:NgForm)
  {
    
  }
}
