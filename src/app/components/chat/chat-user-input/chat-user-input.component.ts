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
    console.log("Test1")
    console.log(this.userInput)
    if (this.userInput) {
      this.sendUserInput.emit(this.userInput);
      this.userInput = '';
    }
  }
}
