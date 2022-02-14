import { Component, Input, OnInit } from '@angular/core';
import { productsService } from 'app/services/products.service';
import { productInterface } from '../../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor( public _products:productsService) { }

  ngOnInit(): void {
    this._products.getproducts()
  }

}
