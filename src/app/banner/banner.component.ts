import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  imgUrl1:string = '../../assets/1.jpg'
  imgUrl2:string = '../../assets/2.jpg'
  imgUrl3:string = '../../assets/3.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
