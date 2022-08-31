import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild (ProductsComponent)
  child!: ProductsComponent;
  title = 'Clossplatform';
  hasToShowModal:boolean = false;   //Coming from products / Going to Modal
  IsProductsListShown:boolean = false;

  ToggleProductsList(){
    this.child.IsProductsListShown = !this.child.IsProductsListShown;
    this.IsProductsListShown= this.child.IsProductsListShown;
  }
}