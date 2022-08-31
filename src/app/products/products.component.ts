import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import * as $ from 'jquery';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

// fas fa-magnifying-glass
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // (1)	Property “Discount” of type DiscountOffers Enum.
  // (2)	Property “Store name” of type string.
  // (3)	Property “Store Logo” of type string.
  // (4)	Property “ProductList” which is an array of IProduct.
  // (5)	Property “CategoryList” which an array of type ICategory.
  // (6)	Property “ClientName” of type String.
  // (7)	Property “IsPurshased” of type Boolean

  Discount: number;
  StoreName: string;
  StoreLogo: string;
  ClientName: string;
  IsPurshased: boolean;
  IsProductsListShown:boolean = false;
  IsConfirmContact:boolean = false;

  //new lines
  HasDiscount: boolean;
  Categories: string[] = [
    'Living Rooms',
    'Bed Rooms',
    'Children Rooms',
    'Offices',
  ];
  isConfirmedDeal: boolean = false;
  // faCoffee = FaIconLibrary;

  ProductList: IProduct[] = [];

  CategoryList: ICategory[] = [{ Name: 'Appliances', ID: 1 }];

  constructor(private productsService: ProductsService,public router:Router,public activatedRoute:ActivatedRoute) {
    this.Discount = DiscountOffers.disc1;
    this.StoreName = this.productsService.GetStoreData().StoreName;
    this.StoreLogo = this.productsService.GetStoreData().StoreLogo;
    this.ClientName = '';
    this.IsPurshased = false;
    this.HasDiscount = this.Discount != 0;
  }

  @Output() childEvent = new EventEmitter();
  BuyToModal() {
    this.childEvent.emit(true);
  }

  errorMsg:string = ''
  ngOnInit(): void {
    $('#btn_reset_filter').hide();
    this.renderValues()
  }
  
  renderValues():any{
    this.productsService.getAllProducts().subscribe(   //TODO DO THE SAME on the dashboard
      productsData =>{
      this.ProductList =  productsData;
      this.OriginalProductList = productsData;
    },error=>{
      this.errorMsg = error; 
    })
  }


  TestJQ() {
    $('#offer').html('5%');
    $('#offer').css('background-color', '#dc3545');
  }

  ConfirmBuy() {
    if (this.ClientName == '') {
      throw `ClientName can't be null`;
    }
    this.IsPurshased = !this.IsPurshased;
  }

  OriginalProductList: IProduct[] = [];

  FilterProducts(key: string) {
    
    let value = $('#in_product_search').val();
    // if(value != undefined ||value != number | value != string[]){
    // if(/^[0-9]+$/.test(value)){}
      
    // }
    this.ProductList = this.OriginalProductList.filter(
      (Product: any) => Product[key] == value
    );
    $('#btn_reset_filter').show();
  }

  ResetFilter() {
    this.renderValues()
    $('#btn_reset_filter').hide();
  }

  //Emitter to send data to open modal
  SendData() {
    this.childEvent.emit('this is my data');
  }
}
