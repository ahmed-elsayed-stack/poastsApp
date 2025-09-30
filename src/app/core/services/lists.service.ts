import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Icomments, Ilists } from '../interfaces/ilists';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor( private _HttpClient:HttpClient ) { };

  getAllPosts():Observable<Ilists[]>{
    return this._HttpClient.get<Ilists[]>(`${environment.baseUrl}/posts`)
  }

  getPostDetails(id:string ):Observable<Ilists>{
    return this._HttpClient.get<Ilists>(`${environment.baseUrl}/posts/${id}`)
  }

  getPostComments(id: string):Observable<Icomments[]> {
  return this._HttpClient.get<Icomments[]>(`${environment.baseUrl}/posts/${id}/comments`);
}

 getCreatPost(data: Ilists): Observable<Ilists> {
  return this._HttpClient.post<Ilists>(`${environment.baseUrl}/posts`, data);
} 
}
