import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor( private _HttpClient:HttpClient ) { };

  getAllPosts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/posts`)
  }

  getPostDetails(id:string | null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/posts/${id}`)
  }

  getPostComments(id: string| null):Observable<any> {
  return this._HttpClient.get(`${environment.baseUrl}/posts/${id}/comments`);
}

  getCreatPost(data:any):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/posts` , data)
  }
}
