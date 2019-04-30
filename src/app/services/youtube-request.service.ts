import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeRequestService {

  constructor(private http: HttpClient) {}

  search(query: string){
    const params = new HttpParams().set('q', query);
    return this.http.get('search', {params: params});
  }

  searchById(id) {
    const params = new HttpParams().set('id', id);
    return this.http.get('videos', {params: params});
  }
}
