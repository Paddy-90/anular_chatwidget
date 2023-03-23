import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit{
  @Input() messageText!: string;
  @Input() messageTime!: string;
  @Input() messageImage!: string;
  @Input() isUser!: boolean;

  messageImagel = true;
  isTyping = false;

  ngOnInit() {
    if (!this.isUser) {
      this.isTyping = true;

      setTimeout(() => {
        this.isTyping = false;

      }, 1000);
    }
    console.log(this.messageImage)
  }
}
