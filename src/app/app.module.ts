import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { ChatHeaderComponent } from './components/chat/chat-header/chat-header.component';
import { ChatUserInputComponent } from './components/chat/chat-user-input/chat-user-input.component';
import { ChatButtonComponent } from './components/chat/chat-button/chat-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatWindowComponent,
    ChatHeaderComponent,
    ChatUserInputComponent,
    ChatButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
