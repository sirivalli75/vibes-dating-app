import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PostsService {
  public apiURL= 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: HttpClient) {}

  getPosts(){
    return this._http.get(this.apiURL
      
    );
  }
  crestePost(){
    return this._http.post(this.apiURL,{
        body:"new name",
        id:100,
    })
  }
}