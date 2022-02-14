import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public imageUrl:string = "../../../assets/img/scotch-whisky-experience.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
