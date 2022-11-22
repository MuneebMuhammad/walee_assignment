import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayBmiComponent } from './display-bmi/display-bmi.component';
import { BmiDataComponent } from './bmi-data/bmi-data.component';
import { AddBmiComponent } from './add-bmi/add-bmi.component';
import { ShowAllBmisComponent } from './show-all-bmis/show-all-bmis.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayBmiComponent,
    BmiDataComponent,
    AddBmiComponent,
    ShowAllBmisComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
