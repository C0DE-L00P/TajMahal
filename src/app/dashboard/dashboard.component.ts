import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
Discount:number
StoreName:string
StoreLogo:string
ClientName:string
IsPurshased:boolean

//new lines
HasDiscount:boolean
Categories:string[] = ['Living Rooms','Bed Rooms','Children Rooms','Offices']
isConfirmedDeal:boolean = false;

ProductList:IProduct[] = [
  {ID:1,
  Name: 'Chair',
  Quantity: 4,
  Price: 4000,
  Img: 'sofaImg'},

  {ID:2,
  Name: 'Chair',
  Quantity: 22,
  Price: 1200,
  Img: 'chairImg'}
]

CategoryList:ICategory[] = [
  {Name: "Appliances",
    ID: 1},
  ]

  constructor() {
    this.Discount = DiscountOffers.disc1;
    this.StoreName = "{Taj Mahal}"
    this.StoreLogo = "https://assets-global.website-files.com/60be3a76e72a7c061462f4c5/62780ad7757549f2ae4a7bf2_logo-placeholder-png-6.png"
    this.ClientName = ''
    this.IsPurshased = false;
    this.HasDiscount = this.Discount != 0
  }

  ngOnInit(): void {
  }

}
