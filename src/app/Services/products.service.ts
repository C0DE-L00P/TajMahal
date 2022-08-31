import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  products:IProduct[] = []
  constructor(private http:HttpClient) { }

  _url:string = '../../assets/products.json'
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }

  GetProductById(prdId:number){
    if(isNaN(prdId)) return null
    if(prdId> this.products.length || prdId < 0) return null
    
    return this.products[prdId]
  }

  GetStoreData(){
    return {StoreName: '{Taj Mahal}',StoreLogo: '../../assets/logo.png'}
  }
}
