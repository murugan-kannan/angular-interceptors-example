import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {
  url: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {}

  getComments() {
    return this.httpClient.get<Comments[]>(this.url + 'comments');
  }
}
