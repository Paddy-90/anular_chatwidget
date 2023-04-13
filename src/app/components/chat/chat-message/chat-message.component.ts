import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

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
  @Input() messageButtons!: { title: string; payload: string }[];

  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  // Define a property 'isTyping' to represent whether the user is typing or not
  isTyping = false;

  ngOnInit() {
    // If the component is not representing the user, set 'isTyping' to true
    if (!this.isUser) {
      this.isTyping = true;
      // Set a timer to set 'isTyping' to false after a delay
      setTimeout(() => {
        this.isTyping = false;
      }, 1000);
    }
  }

  // Method for buttons in the chatbot. Emit the 'buttonClick' event with the provided payload.
  onButtonClick(payload: string): void {
    this.buttonClick.emit(payload);
  }
}
