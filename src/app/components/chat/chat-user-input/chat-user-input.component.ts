import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-user-input',
  templateUrl: './chat-user-input.component.html',
  styleUrls: ['./chat-user-input.component.css']
})
export class ChatUserInputComponent {
  userInput: string = '';

  // Output property to send back the user input
  @Output() sendUserInput = new EventEmitter<string>();

  // Function to send back and reset the userInput
  onSubmit() {
    if (this.userInput && this.userInput.trim().length !== 0) {
      this.sendUserInput.emit(String(this.userInput.trim()));
      this.userInput = '';
    }
  }
}
