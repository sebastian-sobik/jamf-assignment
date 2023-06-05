import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AllItemsComponent} from "./all-items/all-items.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'all-products', component: AllItemsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
