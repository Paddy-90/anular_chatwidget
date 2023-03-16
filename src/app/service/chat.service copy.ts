import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})

export class ChatbotService {
  private apiUrl = 'http://localhost:5005/webhooks/rest/webhook';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<string> {
    const url = `${this.apiUrl}`;
    const body = {
      sender: 'sdaf',
      message: message,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(url, body, httpOptions).pipe(
      map(response => response[0].text)
    );
  }
}
