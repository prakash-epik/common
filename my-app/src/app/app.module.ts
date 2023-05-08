import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgeService } from './age.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    // HttpClientModule
  ],
  // exports: [
  // //  CommonModule,
  //   FormsModule,
  //   HttpClientModule,
  //  // RouterModule
  // ],
  providers: [AgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
