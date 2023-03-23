import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {
  @Output() clicked = new EventEmitter();
  @Input() isOpen!: boolean;

  onClick() {
    this.clicked.emit();
  }

  toggleChatWindow() {
    this.isOpen = !this.isOpen;
    this.clicked.emit();
  }
}
