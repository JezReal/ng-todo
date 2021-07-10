import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link = 'http://localhost/todo/';

  constructor(private httpClient: HttpClient) { 
    
  }

  login(data: any) {
    return this.httpClient.post(this.link + "login", JSON.stringify(data));
  }

  register(data: any) {
    return this.httpClient.post(this.link + "register", JSON.stringify(data));
  }
}
