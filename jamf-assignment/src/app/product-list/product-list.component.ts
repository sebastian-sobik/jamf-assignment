import {Component, Input} from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products : Product[];

  defaultImage($event: ErrorEvent) {
    // @ts-ignore
    $event.target.src = "http://www.mdtop.com.br/wp-content/uploads/2021/01/placeholder-images-image_large.png";
  }
}
