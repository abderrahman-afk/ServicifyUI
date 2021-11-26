import {Component, OnInit} from '@angular/core';
import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message = '';
  messages = [];
  userchat:any = JSON.parse(localStorage.getItem('user'));
  username = this.userchat.email;
  


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('25291c0752d6089a660c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', data => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http.post('http://159.223.28.104/service/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }
}