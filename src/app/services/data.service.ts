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

  getAllTodos(data: any) {
    return this.httpClient.post(this.link + "todos", JSON.stringify(data));
  }

  delete(data: any) {
    return this.httpClient.post(this.link + "deletetodo", JSON.stringify(data));
  }

  update(data: any) {
    return this.httpClient.post(this.link + "updatetodo", JSON.stringify(data));
  }

  add(data: any) {
    return this.httpClient.post(this.link + "inserttodo", JSON.stringify(data));

  }
}
