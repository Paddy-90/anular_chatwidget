import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  time(): string{
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const dayOfWeek = new Intl.DateTimeFormat('de', { weekday: 'short' }).format(now);
    const time = `${timeString} - ${dayOfWeek}`;
    return time;
  }

  sendMessage(message: Message): Observable<Message[]> {
    const body = {
      message: message.text,
      sender: 'sadf34'
    };
    return this.http.post<any>(this.rasaUrl, body, this.httpOptions).pipe(
      map(responses => {
        var responseMessages:Message[] = [];
        responses.forEach((element: any) => {
          const message: Message = {
            text: element.text,
            image: element.image,
            time: this.time(),
            isUser: false,
            buttons: element.buttons
          }
          responseMessages.push(message)
        });
        return responseMessages;
      })
    );
  }
}
