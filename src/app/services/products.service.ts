import { Injectable } from '@angular/core';
import { categoryInterface } from 'app/models/category.interface';
import { productInterface } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor() { }

  productsArr:productInterface[] = []
  categoryArr:categoryInterface[] = []

  async getproducts(){
    const res = await fetch('http://localhost:1000/products')

    const data = await res.json()
    console.log(data)
    this.productsArr = data
  }
  async getCategories(){
    const res = await fetch('http://localhost:1000/category')

    const data = await res.json()
    console.log(data)
    this.categoryArr = data
  }
}
