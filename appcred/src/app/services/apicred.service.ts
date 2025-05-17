import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicredService {
  private apiUrl = 'http://localhost:8080/credito';

  constructor(private http: HttpClient) {}

  getCreditos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}