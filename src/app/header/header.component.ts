import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgUrl1:string = '../../assets/1.jpg'
  imgUrl2:string = '../../assets/2.jpg'
  imgUrl3:string = '../../assets/3.jpg'
  StoreName:string;
  StoreLogo:string;
  styleSelectedTab= {
    'background-color': "#198754",
     'border-radius': '8px',
     'color': 'white',
  }
  

  constructor(private productsService:ProductsService) {
    this.StoreName = this.productsService.GetStoreData().StoreName;
    this.StoreLogo = this.productsService.GetStoreData().StoreLogo;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  // this.CarouselFunc()
  }

  Next(){
    ($('.carousel')as any).carousel()
  }

  CarouselFunc(){
    ($('.carousel')as any).carousel({
      interval: 2000
    })

    // $('#myCarousel').on('slide.bs.carousel', function () {
    //   // do something…
    // })
  }
}