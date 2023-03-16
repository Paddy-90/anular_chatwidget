import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  title = 'Stubu';

  @Output() closeChat = new EventEmitter();

  onCloseClick() {
    this.closeChat.emit();
  }
}
