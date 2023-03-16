import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../service/message.model';
import { ChatbotService } from '../../../service/chat.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.css']
})
export class ChatMessageListComponent implements OnInit {
  messages: Message[] = [
    { text: 'Hallo, wie kann ich Ihnen helfen?', image: '', time: '10:00', isUser: false }
  ];
  constructor(private chatbotService: ChatbotService) {}

  ngOnInit(): void {
  }

  getTime(): string{
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const dayOfWeek = new Intl.DateTimeFormat('de', { weekday: 'short' }).format(now);
    const time = `${timeString} - ${dayOfWeek}`;
    return time;
  }

  addMessage(messageText: string) {
    console.log("Test")
    const newMessage: Message = {
      text: messageText,
      image: '',
      time: this.getTime(),
      isUser: true
    };
    this.messages.push(newMessage);

    this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
      this.messages.push(response);
    });
  }
}
