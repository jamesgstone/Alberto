import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {
  public imageUrl:string = '../../../assets/images/scotch-whisky-experience.jpg';
  public storeOrders:Number = 12;
  public storeProducts:Number = 30;


  constructor() { }

  ngOnInit(): void {
  }

}
