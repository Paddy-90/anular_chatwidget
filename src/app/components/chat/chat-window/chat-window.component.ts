import { Component, OnInit } from '@angular/core';
import { Message } from '../../../service/message.model';
import { ChatbotService } from '../../../service/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit{
  isOpen = false;
  messages: Message[] = [
    { text: 'Hallo, wie kann ich Ihnen helfen?', image: '', time: '10:00', isUser: false }
  ];

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.isOpen = false;
  }

  closeChatWindow() {
    console.log(this.isOpen)
    this.isOpen = false;
    console.log(this.isOpen)
  }

  toggleChatWindow(){
    console.log("Before: " + this.isOpen)
    this.isOpen = !this.isOpen;
    console.log("After: " + this.isOpen)
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
