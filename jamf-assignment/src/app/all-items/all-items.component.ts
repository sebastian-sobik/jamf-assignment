import { Component } from '@angular/core';
import {ProductFacadeService} from "../product-facade.service";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {
  $products = this.productsFacade.selectProducts$();

  constructor(protected productsFacade : ProductFacadeService) {
  }
}
