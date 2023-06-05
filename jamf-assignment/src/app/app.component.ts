import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./products.service";
import {Observable} from "rxjs";
import {Product} from "./shared/product.model";
import {ProductFacadeService} from "./product-facade.service";
import {SidebarStateService} from "./sidebar-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected sidebarState: SidebarStateService) {
  }

  openSidebar() {
    this.sidebarState.open();
  }
}
