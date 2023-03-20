import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit{
  @Input() messageText!: string;
  @Input() messageTime!: string;
  @Input() isUser!: boolean;

  isTyping = false;

  ngOnInit() {
    if (!this.isUser) {
      this.isTyping = true;

      setTimeout(() => {
        this.isTyping = false;

      }, 1000);
    }
  }
}


// linkify(text: string): string {
//   const urlRegex = /(https?:\/\/[^\s]+)/g;
//   const wwwRegex = /(www.[^\s]+)/g;
//   console.log("text")
//   return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>').replace(wwwRegex, '<a href="http://$1" target="_blank">$1</a>');
// }
