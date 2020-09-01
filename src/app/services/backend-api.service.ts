import { Injectable } from '@angular/core';
import {retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpclient: HttpClient) {
  }

  getDetail(api) {
    return this.httpclient.get(api);
  }
}
