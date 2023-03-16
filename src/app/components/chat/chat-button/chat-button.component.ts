import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
