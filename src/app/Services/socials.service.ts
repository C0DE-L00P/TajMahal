import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError,Observable } from 'rxjs';
import { IUser } from '../SharedClassesAndTypes/IUser';
import { IPost } from '../SharedClassesAndTypes/IPost';
import { IComment } from '../SharedClassesAndTypes/IComment';


@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http:HttpClient) { }

  _url:string = 'https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }

  _url_posts:string = 'https://jsonplaceholder.typicode.com/posts'
  getPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url_posts).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }

  //TODO back for the id
  getComments(id:number):Observable<IComment[]>{
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).pipe(catchError((err)=>{
      return throwError(()=>err.message || 'Server Error')
    }))
  }
}
