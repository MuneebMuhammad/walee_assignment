import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBmiComponent } from './display-bmi/display-bmi.component';
import { BmiDataComponent } from './bmi-data/bmi-data.component';

@NgModule({
  declarations: [AppComponent, DisplayBmiComponent, BmiDataComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
