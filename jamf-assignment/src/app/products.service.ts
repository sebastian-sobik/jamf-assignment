import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Product, ProductWithoutId} from './shared/product.model';
import {initProducts} from "./shared/initFakeProducts";

let GLOBAL_ID = 2;
function getID() : number {
  return GLOBAL_ID++;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new BehaviorSubject<Product[]>(initProducts);

  selectProducts$(): Observable<Product[]> {
    return this.products.asObservable();
  }

  addProduct(product: ProductWithoutId): void {
    const _products = this.products.getValue();

    _products.push({
      id: getID(),
      ...product
    });

    this.setProducts(_products);
  }

  setProducts(products: Product[]) {
    this.products.next(products);
  }
}
