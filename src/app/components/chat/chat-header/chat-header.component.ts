import { Component, EventEmitter, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  title = 'Stubu';
  faXmark = faXmark;
  @Output() closeChat = new EventEmitter();

  onCloseClick() {
    this.closeChat.emit();
  }
}
