import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-user-input',
  templateUrl: './chat-user-input.component.html',
  styleUrls: ['./chat-user-input.component.css']
})
export class ChatUserInputComponent {
  userInput: string = '';

  @Output() sendUserInput = new EventEmitter<string>();

  onSubmit() {
    if (this.userInput) {
      this.sendUserInput.emit(String(this.userInput));
      this.userInput = '';
    }
  }
}
