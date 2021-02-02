import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { JuicesComponent } from './components/juices/juices.component';
import { CafeComponent } from './components/cafe/cafe.component';
import { AngularFireModule } from '@angular/fire';
import {FormsModule} from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule,SETTINGS} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    GoodsComponent,
    NotFoundComponent,
    NavbarComponent,
    BreakfastComponent,
    LunchComponent,
    JuicesComponent,
    CafeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    {provide:SETTINGS, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
