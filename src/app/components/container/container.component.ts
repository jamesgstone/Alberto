import { Component, OnInit } from '@angular/core';
import { productsService } from 'app/services/products.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor( public _products:productsService) { }

  ngOnInit(): void {
    this._products.getproducts()
  }

}
