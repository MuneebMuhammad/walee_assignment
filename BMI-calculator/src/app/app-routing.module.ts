import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBmiComponent } from './add-bmi/add-bmi.component';
import { ShowAllBmisComponent } from './show-all-bmis/show-all-bmis.component';

const routes: Routes = [
  { path: 'add', component: AddBmiComponent },
  { path: 'lists', component: ShowAllBmisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
