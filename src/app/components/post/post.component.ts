import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post = {}
  user: User;

  constructor(    private userService: UserService,
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
