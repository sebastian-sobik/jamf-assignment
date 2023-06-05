import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SidebarFormComponent} from './sidebar-form/sidebar-form.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './main/main.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { ErrorComponent } from './sidebar-form/error/error.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarFormComponent,
    ProductListComponent,
    MainComponent,
    AllItemsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
