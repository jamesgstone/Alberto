import { Component, Input, OnInit } from '@angular/core';
import { productInterface } from 'app/models/product.interface';

@Component({
  selector: 'app-single-products',
  templateUrl: './single-products.component.html',
  styleUrls: ['./single-products.component.scss']
})
export class SingleProductsComponent implements OnInit {

  constructor() { }

  @Input()
  product:productInterface|undefined

  ngOnInit(): void {
  }

}
