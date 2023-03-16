import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component'
import { TestComponent } from './test/test.component';
import { ChatButtonComponent } from './components/chat/chat-button/chat-button.component';

const routes: Routes = [
  { path: 'home', component: ChatWindowComponent },
  { path: 'button', component: ChatButtonComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
