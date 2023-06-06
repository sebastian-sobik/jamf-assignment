import {Component, Input} from '@angular/core';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product : Product;

  defaultImage($event: ErrorEvent) {
    // @ts-ignore
    $event.target.src = "http://www.mdtop.com.br/wp-content/uploads/2021/01/placeholder-images-image_large.png";
  }
}
