import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  ProductsList:IProduct[] = []
  errorMsg:string = '';
  constructor(private productsService:ProductsService) { 
    this.productsService.getAllProducts().subscribe(
    productsData =>{
    this.ProductsList =  productsData;
  },error=>{
    this.errorMsg = error; 
  })
  }

  @Input() hasToShowModal:any = ''

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.LaunchModal()
  }

  LaunchModal(){
    $('#exampleModal').on('show.bs.modal', function (event:any) {
      var button = $((event.relatedTarget))
      var recipient = button.data('whatever')
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })
  }
  
}
