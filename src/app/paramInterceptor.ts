import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

const BASE_LINK = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = 'AIzaSyCpUwv8AS3FHOZd45FZkLeM8P-DqUN3MIM';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const paramReq = req.clone({
        url: BASE_LINK + req.url,
        setParams: {
          key: API_KEY,
          part: 'snippet',
          maxResults: '20'
          // q: req.url,
        }
        // params: req.params.set(
        //   'key',
        //   API_KEY
        // )
    });
      console.log(paramReq);
      return next.handle(paramReq);
    }
}
