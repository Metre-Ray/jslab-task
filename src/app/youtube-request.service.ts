import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';

const BASE_LINK = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCpUwv8AS3FHOZd45FZkLeM8P-DqUN3MIM';

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
