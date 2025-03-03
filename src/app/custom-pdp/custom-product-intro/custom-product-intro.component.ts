import { Component,OnInit } from '@angular/core';
import {Product} from '@spartacus/core';
import {CurrentProductService} from '@spartacus/storefront';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent implements OnInit {

  product$: Observable<Product> = this.currentProductService.getProduct()  as Observable<Product>;

  constructor(private currentProductService: CurrentProductService) {
  }

  ngOnInit(): void {
  }

}
