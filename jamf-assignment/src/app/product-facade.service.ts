import { Injectable } from '@angular/core';
import {ProductsService} from "./products.service";
import {Observable} from "rxjs";
import {Product, ProductWithoutId} from "./shared/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  constructor(protected productsService : ProductsService) { }

  selectProducts$(): Observable<Product[]> {
    return this.productsService.selectProducts$();
  }

  addProduct(product: ProductWithoutId) : void {
    this.productsService.addProduct(product);
  }
}
