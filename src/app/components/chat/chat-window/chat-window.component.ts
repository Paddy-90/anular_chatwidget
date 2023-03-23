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
    { text: 'Hallo, wie kann ich Ihnen helfen?', image: '', time: this.getTime(), isUser: false }
  ];

  constructor(private chatbotService: ChatbotService, private el: ElementRef) {}

  ngOnInit() {
    this.isOpen = false;
  }

  toggleChatWindow(){
    this.isOpen = !this.isOpen;
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
    const newMessage = this.addUserMessage(messageText)

    this.chatbotService.sendMessage(newMessage).subscribe((response: any) => {
      this.addBotMessages(response)
      // response.forEach((element: any) => {
      //     this.addBotMessage(element)
      // })
    });
  }

  addUserMessage(userMessage: string): Message{
    const newMessage: Message = {
      text: userMessage,
      image: '',
      time: this.getTime(),
      isUser: true
    };
    this.messages.push(newMessage);
    this.scrollToBottom()
    return newMessage
  }

  addBotMessage(botMessage: Message): void{
    if(botMessage.text !== undefined) botMessage.text = this.linkify(botMessage.text);
    //if(botMessage.text === undefined && botMessage.image !== undefined) botMessage.text = "<img src='" + botMessage.image + "'>";
    console.log(botMessage.image)
    //if(botMessage.text === undefined && botMessage.image !== undefined) botMessage.text = "";
    this.messages.push(botMessage);
    this.scrollToBottom();
  }


  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.el.nativeElement.querySelector('.chat-window__messages').scrollTop = this.el.nativeElement.querySelector('.chat-window__messages').scrollHeight;
      }, 100);
    } catch(err) { }
  }

  linkify(text: string): string {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const wwwRegex = /(www.[^\s]+)/g;
    return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>').replace(wwwRegex, '<a href="http://$1" target="_blank">$1</a>');
  }

  async addBotMessages(response: any[]) {
    for (const element of response) {
      await this.addBotMessage(element);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}
