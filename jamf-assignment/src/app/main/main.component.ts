import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../shared/product.model";
import {ProductFacadeService} from "../product-facade.service";
import {SidebarStateService} from "../sidebar-state.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  isMobileLayout = false;
  products$: Observable<Product[]> = this.productsFacade.selectProducts$();

  constructor(protected productsFacade: ProductFacadeService,
              protected sidebarState: SidebarStateService) {
  }

  ngOnInit() {
    window.onresize = () => {
      this.isMobileLayout = window.innerWidth <= 1070
    };
  }

  openSidebar() {
    this.sidebarState.open();
  }
}
