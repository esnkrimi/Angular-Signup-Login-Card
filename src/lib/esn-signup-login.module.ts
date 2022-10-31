import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EsnSignupLoginComponent } from './esn-signup-login.component';



@NgModule({
  declarations: [
    EsnSignupLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    EsnSignupLoginComponent
  ]
})
export class EsnSignupLoginModule { }
