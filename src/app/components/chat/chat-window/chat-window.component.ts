import { Component, OnInit, ElementRef} from '@angular/core';
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

  constructor(private chatbotService: ChatbotService, private el: ElementRef) {}

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
    if (!messageText || messageText.trim().length === 0) {
      return; // do not add empty messages
    }
    const newMessage: Message = {
      text: messageText,
      image: '',
      time: this.getTime(),
      isUser: true
    };
    this.messages.push(newMessage);
    setTimeout(() => {
      this.scrollToBottom(); // scroll to bottom after response message (with 100ms timeout)
    }, 100);

    this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
      console.log("res:" + response)
      setTimeout(() => {
        this.messages.push(response);
      }, 1000);

      setTimeout(() => {
        this.scrollToBottom(); // scroll to bottom after response message (with 100ms timeout)
      }, 1100);
    });
  }

  scrollToBottom(): void {
    try {
      this.el.nativeElement.querySelector('.chat-window__messages').scrollTop = this.el.nativeElement.querySelector('.chat-window__messages').scrollHeight;
    } catch(err) { }
  }
}
